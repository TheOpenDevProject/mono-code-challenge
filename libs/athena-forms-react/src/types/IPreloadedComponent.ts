import React from "react";
import { IGenericPropType } from "./IGenericProps";

export interface IPreloadedComponent {
  component: React.ReactElement;
  props: IGenericPropType;
}
