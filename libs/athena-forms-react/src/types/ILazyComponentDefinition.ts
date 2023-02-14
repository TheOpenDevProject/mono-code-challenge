import { IGenericPropType } from "./IGenericProps";
import { ComponentType, LazyExoticComponent } from "react";

export interface ILazyComponentDefinition {
  lazyComponent: LazyExoticComponent<ComponentType<unknown>>;
  defaultProps?: IGenericPropType;
}
