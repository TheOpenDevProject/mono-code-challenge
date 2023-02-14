export enum QuestionType {
  RatingZone = "rating-zone",
  Text = "text-input",
  LargeTextInput = "area-input",
  Description = "description-block",
}

export interface CreateQuestion {
  uuid?: string;
  internalSchemaName: string;
  label?: string;
  type: QuestionType;
  pageNumber: number;
  prettyName: string;
  ordinal?: number;
  shouldBeRemoved?: boolean;
  defaultProps?:
    | {
        [key: string]: unknown;
      }
    | Array<{ propKey: string; propValue: unknown }>;
}
