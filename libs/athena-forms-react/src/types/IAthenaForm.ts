import { IValidationState } from "./IValidationState";
import { IComponentDefinitionMap } from "./IComponentDefinitionMap";
import { IFrameStackMap } from "./IFrameStackMap";
import { State } from "../hooks/useFormState";
import { IFormFlowFrame } from "./IFormFlowFrame";
import React from "react";

export interface IAthenaForm {
  schema?: IFrameStackMap | undefined;
  children?: React.ReactElement;
  componentRegistry: IComponentDefinitionMap;
  onChange?: (state: State) => void;
  onValidationStateChange?: (validationLevel: IValidationState) => void;
  //onRenderGroup?: (group: IAthenaFormItemGroup) => React.ReactElement;
  onRenderFrame?: (currentFrame: IFormFlowFrame) => React.ReactElement;
  showDefaultGroupNavigation?: boolean;
  initialValue?: State;
  enableAlternativeRender?: boolean;
}
