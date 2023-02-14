import { CreateQuestion, CreateQuestionPage } from "../types";
import { RemoveQuestion, SchemaGeneratorAction, SetMetadata, UpdateQuestion } from "../hooks/useSchemaGenerator";

export const payloadIsUpdateQuestion = (action: SchemaGeneratorAction): action is SchemaGeneratorAction & { payload: UpdateQuestion } => {
  return action.event === "update_question";
};

export const payloadIsCreateQuestionPage = (action: SchemaGeneratorAction): action is SchemaGeneratorAction & { payload: CreateQuestionPage } => {
  return action.event === "add_page" || action.event === "update_page";
};

export const isRemoveQuestion = (action: SchemaGeneratorAction): action is SchemaGeneratorAction & { payload: RemoveQuestion } => {
  return action.event === "remove_question";
};

export const payloadIsCreateQuestion = (action: SchemaGeneratorAction): action is SchemaGeneratorAction & { payload: CreateQuestion } => {
  return action.event === "add_question" || action.event === "update_question";
};

export const isMetadata = (action: SchemaGeneratorAction): action is SchemaGeneratorAction & { payload: SetMetadata } => {
  return action.event === "set_name";
};

export const payloadIsOrdinalUpdate = (
  action: SchemaGeneratorAction
): action is SchemaGeneratorAction & { payload: { pageNumber: number; originalIndex: number; updatedIndex: number } } => {
  return action.event === "move_question";
};
