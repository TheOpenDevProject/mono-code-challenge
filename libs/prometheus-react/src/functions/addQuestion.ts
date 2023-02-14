import { CreateQuestionSet } from "../types";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";
import { payloadIsCreateQuestion } from "./typeGuards";

export const addQuestion = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!action.payload || !payloadIsCreateQuestion(action) || !state) {
    throw new Error("The payload is undefined.");
  }

  if (!state.pages) {
    state.pages = [
      {
        pageNumber: 0,
        questions: [],
      },
    ];
  }

  state.pages[action.payload.pageNumber].questions = [...state.pages[action.payload.pageNumber].questions, action.payload];

  return {
    ...state,
  };
};
