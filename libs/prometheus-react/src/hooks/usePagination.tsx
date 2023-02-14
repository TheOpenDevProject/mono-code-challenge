import { useCallback, useEffect, useState } from "react";
import { CreateQuestionSet } from "../types/CreateQuestionSet.type";

export function usePrometheusPagination(schema: CreateQuestionSet) {
  const [index, setIndex] = useState<number>(0);
  const [normalizedIndex, setNormalizedIndex] = useState<number>(index + 1);
  const [activeGroupId, setActiveGroupId] = useState<number | undefined>(schema.pages ? schema.pages[index].pageNumber : undefined);

  useEffect(() => {
    if (!schema.pages) {
      return;
    }
    setActiveGroupId(schema.pages[index].pageNumber);
  }, [index, schema.pages]);
  /**
   * Allow us to move forward in our forms.
   * @type {() => void}
   */
  const next = useCallback(() => {
    if (!schema.pages) {
      return;
    }
    /**
     * We've reached the end
     */
    if (normalizedIndex >= schema.pages.length) {
      return;
    }

    setIndex((prevState) => (schema.pages ? (prevState < schema.pages.length ? prevState + 1 : prevState) : prevState));
    setNormalizedIndex((prevState) => prevState + 1);
  }, [schema.pages, normalizedIndex]);

  /**
   *
   * @type {() => boolean}
   */
  const forwardDisabled = useCallback(() => schema.pages && index >= schema.pages.length - 1, [index, schema.pages]);

  /**
   * Allow us to move backwards in our forms
   * @type {() => void}
   */
  const back = useCallback(() => {
    if (!schema.pages) {
      return;
    }
    /**
     * We've reached the end
     */
    if (normalizedIndex === 1) {
      return;
    }
    setIndex((prevState) => (schema.pages ? (schema.pages.length > prevState ? prevState - 1 : prevState) : prevState));
    setNormalizedIndex((prevState) => prevState - 1);
  }, [schema.pages, normalizedIndex]);

  return { index, next, back, forwardDisabled, activeGroupId };
}
