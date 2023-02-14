import { CreateQuestionSet } from "../types";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";
import { payloadIsUpdateQuestion } from "./typeGuards";
import { invertObjectToArray } from "./invertObjectToArray";

export const updateQuestion = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!state) {
    throw new Error("The state is undefined.");
  }

  if (!state.pages) {
    return state;
  }

  if (!payloadIsUpdateQuestion(action)) {
    throw new Error("Action is not an update question");
  }

  let question;
  let cleanQuestion;
  for (const page of state.pages) {
    question = page.questions.find((question) => question.uuid === action.payload.uuid);
    cleanQuestion = page.questions.find((question) => question.uuid === action.payload.uuid);
    if (question) {
      break;
    }
  }

  if (!question) {
    throw new Error("Question not found");
  }

  question.prettyName = action.payload.prettyName;
  question.ordinal = action.payload.ordinal;

  if (action.payload.defaultProps && cleanQuestion && cleanQuestion.defaultProps) {
    question.defaultProps = invertObjectToArray(action.payload.defaultProps, cleanQuestion.defaultProps as any);
  }

  return { ...state };
};
