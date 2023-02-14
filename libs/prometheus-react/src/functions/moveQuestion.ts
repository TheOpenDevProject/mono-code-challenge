import { CreateQuestionSet } from "../types";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";
import { payloadIsOrdinalUpdate } from "./typeGuards";

export const moveQuestion = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!state) {
    return { name: "" };
  }

  if (!payloadIsOrdinalUpdate(action)) {
    throw new Error("Invalid Action");
  }

  const { pageNumber, originalIndex, updatedIndex } = action.payload;
  if (!state.pages) {
    throw new Error("Pages collection is undefined");
  }

  const page = state.pages[pageNumber];

  if (!page) {
    throw new Error("Page is undefined");
  }

  const [item] = state.pages[pageNumber].questions.splice(originalIndex, 1);
  state.pages[pageNumber].questions.splice(updatedIndex, 0, item);

  for (const [index, question] of state.pages[pageNumber].questions.entries()) {
    question.ordinal = index;
  }

  return {
    ...state,
  };
};
