import { Reducer, useReducer } from "react";
import { CreateQuestionSet, CreateQuestionPage, CreateQuestion } from "../types";
import { moveQuestion } from "../functions/moveQuestion";
import { addQuestion } from "../functions/addQuestion";
import { addPage } from "../functions/addPage";
import { removeQuestion } from "../functions/removeQuestion";
import { setQuestionSetName } from "../functions/setQuestionSetName";
import { updateQuestion } from "../functions/updateQuestion";

export type PageEventType = "add_page" | "remove_page" | "update_page" | "set_name";
export type QuestionEventType = "add_question" | "remove_question" | "update_question" | "move_question";
export type SetMetadata = { name: string };
export type MoveQuestion = {
  pageNumber: number;
  originalIndex: number;
  updatedIndex: number;
};

export type RemoveQuestion = {
  uuid: string;
};

export type UpdateQuestion = { uuid: string } & Omit<CreateQuestion, "internalSchemaName">;

export interface SchemaGeneratorAction {
  event: PageEventType | QuestionEventType;
  payload?: CreateQuestionPage | CreateQuestion | SetMetadata | MoveQuestion | RemoveQuestion | UpdateQuestion;
}

const reducer = (state: CreateQuestionSet | undefined, action: SchemaGeneratorAction): CreateQuestionSet | undefined => {
  if (!state) {
    return { name: "" };
  }

  if (action.event === "remove_question") {
    return removeQuestion(state, action);
  }
  /**
   * Set the name of the question set
   */
  if (action.event === "set_name") {
    return setQuestionSetName(state, action);
  }

  /**
   * Add a new page to the question set
   */
  if (action.event === "add_page") {
    return addPage(state, action);
  }

  /**
   * Move a question within a page
   */
  if (action.event === "move_question") {
    return moveQuestion(state, action);
  }

  // Add a question to a page
  if (action.event === "add_question") {
    return addQuestion(state, action);
  }

  if (action.event === "update_question") {
    const updatedState = updateQuestion(state, action);
    return updatedState;
  }

  return state;
};

export function useSchemaGenerator(existingSchema?: CreateQuestionSet) {
  const [schema, setSchema] = useReducer<Reducer<CreateQuestionSet | undefined, SchemaGeneratorAction>>(reducer, existingSchema);

  return {
    schema,
    setSchema,
  };
}
