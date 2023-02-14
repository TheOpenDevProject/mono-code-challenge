import React, { useCallback } from "react";
import { createBoundNode } from "../functions/createBoundNode";
import { ComponentRegistry } from "./useRegisteredComponents";
import { IFormFlowFrame } from "../types/IFormFlowFrame";
import { Action, State } from "./useFormState";
import { IFormControls } from "../types";
import { Button, ButtonSize, Flex } from "@scylla-digital/design-library";
import { INode } from "../types/INode";
import { usePagination } from "./usePagination";

interface DefaultRenderOpts {
  registeredComponents?: ComponentRegistry;
  currentFrame?: IFormFlowFrame;
  dispatch?: React.Dispatch<Action>;
  formControls?: IFormControls;
  initialValues?: State;
}

export function useAlternativeRender(opts: DefaultRenderOpts) {
  const { registeredComponents, currentFrame, formControls, dispatch, initialValues } = opts;

  const { index, back, next, forwardDisabled } = usePagination(currentFrame ? currentFrame.nodeGroups : undefined);

  return useCallback((): React.ReactElement[] | undefined => {
    const nodes = [];

    if (!currentFrame || !registeredComponents || !dispatch || !formControls) {
      return;
    }

    // Super hack: provide access to the formControls next and back functions
    if (!formControls.nextGroup) {
      formControls.nextGroup = next;
    }
    if (!formControls.prevGroup) {
      formControls.prevGroup = back;
    }

    const currentGroup = currentFrame.nodeGroups[index];

    nodes.push(
      <Flex flexGap={"1rem"} key={currentFrame.name} flexDirection={"column"} flexGrow={1}>
        {currentGroup.children.map((node: INode) => {
          const component = registeredComponents.get(node.type);
          if (!component) {
            throw new Error(`Component ${node.type} not found in registry.`);
          }

          return (
            <Flex key={node.name} flexDirection={"column"} flex={"1 auto"} flexGrow={1} flexShrink={1}>
              {createBoundNode(component, dispatch, node, formControls, initialValues)}
            </Flex>
          );
        })}

        {currentFrame.nodeGroups.length > 1 && (
          <Flex flexDirection={"row"} justifyContent={"space-between"}>
            <Flex>
              <Button buttonType={"primary"} onClick={back} buttonSize={ButtonSize.M}>
                Back
              </Button>
            </Flex>
            <Flex>
              <Button buttonType={"primary"} onClick={next} buttonSize={ButtonSize.M} disabled={forwardDisabled()}>
                Next
              </Button>
            </Flex>
          </Flex>
        )}
      </Flex>
    );

    return nodes;
    /*eslint-disable */
  }, [back, currentFrame, dispatch, forwardDisabled, index, next, registeredComponents]);
}
