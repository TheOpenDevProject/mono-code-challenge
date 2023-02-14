import { IValidationState } from "./IValidationState";
import { IGenericPropType } from "./IGenericProps";

export interface INode {
  name: string;
  type: string;
  dependsOn?: string[];
  defaultProps?: IGenericPropType;
  value?: string | number | boolean | null;
  validationState?: () => IValidationState;
}
