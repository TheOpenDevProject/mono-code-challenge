import { CreateQuestionPage, UpdateQuestionPage } from "../types/CreateQuestionPage.type";

export const sortQuestions = (currentGroup: CreateQuestionPage | UpdateQuestionPage) => {
  return [...currentGroup.questions].sort((a, b) => {
    if (a.ordinal === undefined || b.ordinal === undefined) {
      return 0;
    }
    return a.ordinal - b.ordinal;
  });
};
