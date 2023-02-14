import { CreateQuestionPage, UpdateQuestionPage } from "./CreateQuestionPage.type";

export interface CreateQuestionSet {
  name: string;

  pages?: CreateQuestionPage[] | UpdateQuestionPage[];
}
