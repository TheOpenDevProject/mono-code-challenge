import { useRender } from "../hooks/useRender";
import { CreateQuestionSet } from "../types";
import { Dispatch, useEffect } from "react";
import { State } from "@scylla-digital/athena-forms-react/src/hooks/useFormState";
import { SchemaGeneratorAction } from "../hooks/useSchemaGenerator";

interface QuestionSetPreviewProps {
  schema: CreateQuestionSet;
  mutator?: Dispatch<SchemaGeneratorAction>;
  onChange: (schema: State) => void;
  onSubmit: (schema: State) => void;
  onPageIndexChange: (pageIndex: number) => void;
  editMode?: boolean;
}

export function QuestionSetRender(props: QuestionSetPreviewProps) {
  const { schema, onPageIndexChange, onChange, onSubmit, editMode, mutator } = props;
  const { renderComponent, currentIndex, internalFormState } = useRender(schema, onSubmit, mutator, editMode);

  useEffect(() => {
    onChange(internalFormState);
  }, [internalFormState, onChange]);

  useEffect(() => {
    onPageIndexChange(currentIndex);
  }, [currentIndex, onPageIndexChange]);

  return <>{renderComponent()}</>;
}
