import React, { ChangeEvent } from "react";
import { IFormControls, IPreloadedComponent } from "../types";
import { Action, State } from "../hooks/useFormState";
import { INode } from "../types/INode";

export function createBoundNode(component: IPreloadedComponent, dispatch: React.Dispatch<Action>, node: INode, formControls: IFormControls, state?: State) {
  let initialValue;
  const defaultProps = node.defaultProps ? node.defaultProps : component.props;
  if (state) {
    initialValue = state.fields[node.name] ? state.fields[node.name].fieldValue : defaultProps.value;
  }

  return React.createElement(component.component.type, {
    ...defaultProps,
    key: node.name,
    value: initialValue,
    onChange: (e: ChangeEvent<HTMLInputElement> | string | number) => {
      if (typeof e === "string" || typeof e === "number") {
        dispatch({ fieldId: node.name, type: "push_value", value: e });
        return;
      }

      dispatch({ fieldId: node.name, type: "push_value", value: e.target.value });
    },
    ...(defaultProps.onClick && {
      onClick: (e: React.MouseEvent<HTMLInputElement>) => {
        if (defaultProps && defaultProps.onClick && typeof defaultProps.onClick === "function") {
          defaultProps.onClick(e, formControls);
        }
      },
    }),
  });
}
