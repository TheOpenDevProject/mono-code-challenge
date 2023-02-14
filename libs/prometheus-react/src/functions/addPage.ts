import { payloadIsCreateQuestionPage } from "./typeGuards";
import { CreateQuestionSet } from "../types";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";

export const addPage = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!state) {
    throw new Error("The state is undefined.");
  }

  if (!payloadIsCreateQuestionPage(action)) {
    throw new Error("Either the payload, current state or pages collection is undefined.");
  }

  if (!state.pages) {
    state.pages = [
      {
        pageNumber: 0,
        questions: [],
      },
    ];

    return state;
  }

  return {
    ...state,
    pages: [
      ...state.pages,
      {
        pageNumber: state.pages.length + 1,
        questions: [],
      },
    ],
  };
};
