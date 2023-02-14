import React, { useCallback, useReducer } from "react";

export interface State {
  fields: Record<string, { fieldValue: string | number | boolean }>;
}

export type Action = { type: "push_value"; value: string | number | boolean; fieldId: string };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "push_value":
      return { fields: { ...state.fields, [action.fieldId]: { fieldValue: action.value } } };
  }
};

export function useFormState(initialState?: State) {
  const [state, dispatch] = useReducer<React.Reducer<State, Action>>(reducer, initialState ?? { fields: {} });
  const getFieldValue = useCallback(
    (fieldName: string) => {
      return state.fields[fieldName] === undefined || state.fields[fieldName].fieldValue === "" ? null : state.fields[fieldName].fieldValue;
    },
    [state.fields]
  );
  return { state, dispatch, getFieldValue };
}
