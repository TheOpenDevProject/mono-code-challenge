import { CreateQuestionSet } from "../types";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";
import { isMetadata } from "./typeGuards";

export const setQuestionSetName = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!isMetadata(action)) {
    throw new Error("Invalid action");
  }

  return {
    ...state,
    name: action.payload.name || "",
  };
};
