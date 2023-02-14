import { IGenericPropType } from "./IGenericProps";

export interface IResolvedComponent {
  component: React.ReactElement;
  props: IGenericPropType;
}
