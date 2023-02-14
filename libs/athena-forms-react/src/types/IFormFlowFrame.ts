import { INodeTree } from "./INodeTree";

export interface IFormFlowFrame {
  id?: string;
  name: string;
  nodeGroups: INodeTree[];
}

/**
 * Frames are used to group sets of groups together.
 * Frames can be linked together to create a flow.
 */
