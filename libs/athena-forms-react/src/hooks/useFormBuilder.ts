import { IFrameStackMap } from "../types";
import { Reducer, useReducer } from "react";
import { INode } from "../types/INode";

export interface FormBuilderAction {
  eventType: "add";
  payload: INode;
}

const reducer = (state: IFrameStackMap | undefined, action: FormBuilderAction): IFrameStackMap => {
  if (!state || !state["default"]) {
    return {
      default: {
        name: "default",
        id: "default",
        nodeGroups: [
          {
            name: "defaultNodeGroup",
            id: "defaultNodeGroup",
            children: [action.payload],
          },
        ],
      },
    };
  }
  switch (action.eventType) {
    case "add":
      return {
        ...state,
        default: {
          ...state["default"],
          nodeGroups: [
            {
              ...state["default"].nodeGroups[0],
              children: [...state["default"].nodeGroups[0].children, action.payload],
            },
          ],
        },
      };
  }
};

export function useFormBuilder(initialSchema?: IFrameStackMap) {
  const [schema, setSchema] = useReducer<Reducer<IFrameStackMap | undefined, FormBuilderAction>>(reducer, initialSchema);

  return { schema, setSchema };
}
