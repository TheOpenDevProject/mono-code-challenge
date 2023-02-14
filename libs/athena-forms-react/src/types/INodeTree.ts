import { INode } from "./INode";

export interface INodeTree {
  id: string;
  name: string;
  children: INode[];
}
