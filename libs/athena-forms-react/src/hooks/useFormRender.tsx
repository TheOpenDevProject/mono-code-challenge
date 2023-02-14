import React, { ReactElement, useEffect, useState } from "react";
import { ComponentRegistry } from "./useRegisteredComponents";
import { IFormFlowFrame } from "../types/IFormFlowFrame";
import { State, useFormState } from "./useFormState";
import { IFormControls } from "../types";
import { useDefaultRender } from "./useDefaultRender";
import { useAlternativeRender } from "./useAlternativeRender";
import { usePreviewRender } from "./usePreviewRender";

export type RenderOpts = {
  registeredComponents?: ComponentRegistry;
  currentFrame?: IFormFlowFrame;
  onRenderFrame?: (currentFrame: IFormFlowFrame) => React.ReactElement;
  renderType?: "default" | "alternative" | "preview";
};

/**
 * Select how groups are rendered within a frame
 * Select how items are rendered within a group
 */

//First we render the frame of groups

export function useFormRender(opts: RenderOpts, formControls: IFormControls, initialState?: State) {
  const { registeredComponents, currentFrame, onRenderFrame, renderType } = opts;
  const { dispatch, state } = useFormState(initialState);
  const defaultRender = useDefaultRender({
    registeredComponents,
    dispatch,
    formControls,
    currentFrame,
    initialValues: state,
  });

  //Temp hack for a specific use case
  const alternativeRender = useAlternativeRender({
    registeredComponents,
    dispatch,
    formControls,
    currentFrame,
    initialValues: state,
  });

  const previewRender = usePreviewRender({ registeredComponents, formControls, currentFrame });

  const [frame, setFrame] = useState<React.ReactElement | ReactElement[] | undefined>(); // Start with an empty frame buffer.

  useEffect(() => {
    if (!currentFrame) {
      return;
    }

    if (!registeredComponents) {
      throw new Error("No registered components found");
    }

    if (renderType === "preview") {
      setFrame(previewRender());
      return;
    }

    if (renderType === "alternative") {
      setFrame(alternativeRender());
      return;
    }

    if (!onRenderFrame) {
      setFrame(defaultRender());
      return;
    }
  }, [registeredComponents, currentFrame, onRenderFrame, dispatch, defaultRender, alternativeRender, previewRender, renderType]);

  return { frame, state };
}
