import { ComponentRegistry } from "@scylla-digital/athena-forms-react/src/hooks/useRegisteredComponents";
import { ReactElement, useCallback } from "react";
import { CreateQuestionSet } from "../types";
import { Action, State } from "@scylla-digital/athena-forms-react/src/hooks/useFormState";
import { Button, ButtonSize, Flex, useModal } from "@scylla-digital/design-library";
import { createBoundNode } from "../functions/createBoundNode";
import styled from "styled-components";
import { DeleteForeverRounded, DragHandle, EditRounded } from "@material-ui/icons";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { SchemaGeneratorAction } from "./useSchemaGenerator";
import { v4 as uuid } from "uuid";
import { ConfirmItemRemovalModal } from "../components/ConfirmItemRemovalModal";
import { ConfigureFieldModal } from "../components/ConfigureFieldModal";
import { sortQuestions } from "../functions/sortQuestions";

interface DefaultRenderOpts {
  registeredComponents?: ComponentRegistry;
  dispatch?: React.Dispatch<Action>;
  updateSchema?: React.Dispatch<SchemaGeneratorAction>;
  schema: CreateQuestionSet;
  next: () => void;
  back: () => void;
  index: number;
  forwardDisabled: () => boolean | undefined;
  onSubmit: (state: State) => void;
  internalState: State;
  editMode?: boolean;
}

const ItemContainer = styled(Flex)``;

export function useRenderEngine(opts: DefaultRenderOpts) {
  const { setContents, modal, setModalOpen } = useModal();
  const { updateSchema, registeredComponents, dispatch, schema, forwardDisabled, index, next, back, onSubmit, internalState, editMode } = opts;

  return useCallback((): React.ReactElement[] | ReactElement | undefined => {
    const nodes = [];

    if (!registeredComponents || !dispatch || !schema.pages) {
      return;
    }

    const currentGroup = schema.pages[index];

    const sortedQuestions = sortQuestions(currentGroup);

    if (!currentGroup) {
      return;
    }
    nodes.push(
      <DragDropContext
        onDragEnd={(result) => {
          if (schema.pages && result.destination && updateSchema) {
            updateSchema({
              event: "move_question",
              payload: {
                pageNumber: index,
                originalIndex: result.source.index,
                updatedIndex: result.destination.index,
              },
            });
          }
        }}
      >
        <Droppable droppableId={index.toString()} key={index}>
          {(provided) => (
            <Flex flexGap={"1rem"} key={schema.name} flexDirection={"column"} flexGrow={1} {...provided.droppableProps} ref={provided.innerRef}>
              {sortedQuestions.map((node, index) => {
                const component = registeredComponents.get(node.type);
                if (!component) {
                  throw new Error(`Component ${node.type} not found in registry.`);
                }

                if (node.shouldBeRemoved) {
                  return;
                }

                return (
                  <Draggable draggableId={node.uuid ?? uuid()} index={index} key={node.uuid}>
                    {(provided) => (
                      <ItemContainer
                        key={node.uuid}
                        flexDirection={"column"}
                        flex={"1 auto"}
                        flexGrow={1}
                        flexShrink={1}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Flex justifyContent={"space-between"}>
                          {editMode && (
                            <>
                              <DragHandle />
                              <Flex>
                                {node.uuid && (
                                  <EditRounded
                                    onClick={() => {
                                      if (!updateSchema) {
                                        return;
                                      }
                                      setModalOpen(true);
                                      setContents(
                                        <ConfigureFieldModal
                                          activePageIndex={index}
                                          fieldType={node.type}
                                          item={node}
                                          setSchema={updateSchema}
                                          onComplete={() => setModalOpen(false)}
                                          onCancel={() => setModalOpen(false)}
                                        />,
                                        "Edit Item"
                                      );
                                    }}
                                  />
                                )}
                                {node.uuid && (
                                  <DeleteForeverRounded
                                    onClick={() => {
                                      if (!updateSchema) {
                                        return;
                                      }
                                      setModalOpen(true);
                                      setContents(
                                        <ConfirmItemRemovalModal
                                          onCancel={() => setModalOpen(false)}
                                          onConfirm={() => {
                                            updateSchema({
                                              event: "remove_question",
                                              payload: { uuid: node.uuid ?? "BAD_UUID" },
                                            });
                                            setModalOpen(false);
                                          }}
                                        />,
                                        "Are you sure you want to remove this item?"
                                      );
                                    }}
                                  />
                                )}
                              </Flex>
                            </>
                          )}
                        </Flex>
                        {createBoundNode(component, dispatch, node)}
                      </ItemContainer>
                    )}
                  </Draggable>
                );
              })}

              {schema.pages && schema.pages.length > 1 ? (
                <Flex flexDirection={"row"} justifyContent={"space-between"}>
                  <Flex>
                    <Button buttonType={"primary"} onClick={back} buttonSize={ButtonSize.M}>
                      Back
                    </Button>
                  </Flex>
                  <Flex>
                    {forwardDisabled() && !editMode ? (
                      <Button buttonType={"primary"} onClick={() => onSubmit(internalState)} buttonSize={ButtonSize.M}>
                        Submit
                      </Button>
                    ) : (
                      <Button buttonType={"primary"} onClick={next} buttonSize={ButtonSize.M}>
                        Next
                      </Button>
                    )}
                  </Flex>
                </Flex>
              ) : (
                !editMode && (
                  <Button buttonType={"primary"} onClick={() => onSubmit(internalState)} buttonSize={ButtonSize.M}>
                    Submit
                  </Button>
                )
              )}
              {provided.placeholder}
            </Flex>
          )}
        </Droppable>
      </DragDropContext>
    );

    return (
      <>
        {modal}
        {nodes}
      </>
    );
  }, [
    editMode,
    onSubmit,
    back,
    dispatch,
    forwardDisabled,
    index,
    next,
    registeredComponents,
    schema.name,
    schema.pages,
    internalState,
    updateSchema,
    modal,
    setContents,
    setModalOpen,
  ]);
}
