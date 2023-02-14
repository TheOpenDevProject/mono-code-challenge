import { IPreloadedComponent } from "@scylla-digital/athena-forms-react";
import React, { ChangeEvent } from "react";
import { CreateQuestion } from "../types/CreateQuestion.type";
import { Action } from "@scylla-digital/athena-forms-react/src/hooks/useFormState";
import { mapValues, keyBy, isArray } from "lodash";

export function createBoundNode(component: IPreloadedComponent, dispatch: React.Dispatch<Action>, node: CreateQuestion) {
  const defaultProps = node.defaultProps ? node.defaultProps : component.props;

  const result = isArray(defaultProps) ? mapValues(keyBy(defaultProps, "propKey"), "propValue") : defaultProps;

  return React.createElement(component.component.type, {
    ...result,
    key: node.internalSchemaName,
    onChange: (e: ChangeEvent<HTMLInputElement> | string | number) => {
      if (typeof e === "string" || typeof e === "number") {
        dispatch({ fieldId: node.uuid ?? node.internalSchemaName, type: "push_value", value: e });
        return;
      }

      dispatch({ fieldId: node.uuid ?? node.internalSchemaName, type: "push_value", value: e.target.value });
    },
  });
}
