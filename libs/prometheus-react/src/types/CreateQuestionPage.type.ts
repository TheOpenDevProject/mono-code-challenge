import { CreateQuestion } from "./CreateQuestion.type";

export interface CreateQuestionPage {
  pageNumber: number;

  questions: CreateQuestion[];
}

export interface UpdateQuestionPage extends CreateQuestionPage {
  uuid: string;
}
