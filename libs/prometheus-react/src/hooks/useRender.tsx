import { CreateQuestionSet } from "../types/CreateQuestionSet.type";
import { useFormState, useRegisteredComponents } from "@scylla-digital/athena-forms-react";
import prometheusStaticRegistry from "../prometheusStaticRegistry";
import { useRenderEngine } from "./useRenderEngine";
import { usePrometheusPagination } from "./usePagination";
import { State } from "@scylla-digital/athena-forms-react/src/hooks/useFormState";
import { Dispatch } from "react";
import { SchemaGeneratorAction } from "./useSchemaGenerator";

export function useRender(state: CreateQuestionSet, onSubmit: (state: State) => void, mutator?: Dispatch<SchemaGeneratorAction>, editMode?: boolean) {
  const { dispatch, state: internalFormState } = useFormState();
  const registeredComponents = useRegisteredComponents(prometheusStaticRegistry);
  const { forwardDisabled, index, next, back } = usePrometheusPagination(state);
  const renderComponent = useRenderEngine({
    registeredComponents,
    schema: state,
    dispatch,
    forwardDisabled,
    index,
    next,
    back,
    onSubmit,
    internalState: internalFormState,
    editMode,
    updateSchema: mutator,
  });

  return {
    renderComponent,
    internalFormState,
    currentIndex: index,
  };
}
