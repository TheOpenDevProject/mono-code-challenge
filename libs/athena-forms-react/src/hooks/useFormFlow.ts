import { IFormFlowFrame } from "../types/IFormFlowFrame";
import React, { useCallback, useEffect } from "react";
import { IFrameStackMap } from "../types";

export function useFormFlow(frameStack: IFrameStackMap | undefined) {
  const [currentFrame, setCurrentFrame] = React.useState<IFormFlowFrame | undefined>();

  /**
   * Set the default frame to be the current frame to render
   */
  useEffect(() => {
    if (!frameStack || !frameStack["default"]) {
      return;
    }

    setCurrentFrame(frameStack["default"]);
  }, [frameStack]);

  const setActiveFrame = useCallback(
    (frameName: string) => {
      if (!frameStack || !frameStack[frameName]) {
        return;
      }
      setCurrentFrame(frameStack[frameName]);
    },
    [frameStack]
  );

  return { setActiveFrame, currentFrame };
}
