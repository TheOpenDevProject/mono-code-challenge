import React, { useCallback } from "react";
import { ComponentRegistry } from "./useRegisteredComponents";
import { IFormFlowFrame } from "../types/IFormFlowFrame";
import { IFormControls } from "../types";
import { Button, ButtonSize, Flex } from "@scylla-digital/design-library";
import { INode } from "../types/INode";
import { usePagination } from "./usePagination";
import { createPreviewNode } from "../functions/createPreviewNode";

interface DefaultRenderOpts {
  registeredComponents?: ComponentRegistry;
  currentFrame?: IFormFlowFrame;
  formControls?: IFormControls;
}

export function usePreviewRender(opts: DefaultRenderOpts) {
  const { registeredComponents, currentFrame, formControls } = opts;

  const { index, back, next, forwardDisabled } = usePagination(currentFrame ? currentFrame.nodeGroups : undefined);

  return useCallback((): React.ReactElement[] | undefined => {
    const nodes = [];

    if (!currentFrame || !registeredComponents || !formControls) {
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
            <Flex key={node.name} flexDirection={"row"} flex={"1 auto"} flexGrow={1}>
              {createPreviewNode(component, node)}
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
  }, [back, currentFrame, forwardDisabled, index, next, registeredComponents]);
}
