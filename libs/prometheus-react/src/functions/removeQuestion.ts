import { CreateQuestionSet } from "../types";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";
import { isRemoveQuestion } from "./typeGuards";

export const removeQuestion = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!state) {
    throw new Error("The state is undefined.");
  }

  if (!state.pages) {
    return state;
  }

  if (!isRemoveQuestion(action)) {
    throw new Error("Action is not a remove question");
  }

  let question;

  for (const page of state.pages) {
    question = page.questions.find((question) => question.uuid === action.payload.uuid);
    if (question) {
      break;
    }
  }

  if (!question) {
    throw new Error("Question not found");
  }

  question.shouldBeRemoved = true;

  return { ...state };
};
