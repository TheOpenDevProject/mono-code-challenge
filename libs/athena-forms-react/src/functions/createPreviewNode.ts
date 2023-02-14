import { IPreloadedComponent } from "../types";
import { INode } from "../types/INode";
import React from "react";

export function createPreviewNode(component: IPreloadedComponent, node: INode) {
  const defaultProps = node.defaultProps ? node.defaultProps : component.props;

  return React.createElement(component.component.type, {
    ...defaultProps,
    key: node.name,
  });
}
