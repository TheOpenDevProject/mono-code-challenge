import { INodeTree } from "../types/INodeTree";
import { useCallback, useEffect, useState } from "react";

export function usePagination(itemGroups?: INodeTree[]) {
  const [index, setIndex] = useState<number>(0);
  const [normalizedIndex, setNormalizedIndex] = useState<number>(index + 1);
  const [activeGroupId, setActiveGroupId] = useState<string | undefined>(itemGroups ? itemGroups[index].id : undefined);

  useEffect(() => {
    if (!itemGroups) {
      return;
    }
    setActiveGroupId(itemGroups[index].id);
  }, [index, itemGroups]);
  /**
   * Allow us to move forward in our forms.
   * @type {() => void}
   */
  const next = useCallback(() => {
    if (!itemGroups) {
      return;
    }
    /**
     * We've reached the end
     */
    if (normalizedIndex >= itemGroups.length) {
      return;
    }

    setIndex((prevState) => (prevState < itemGroups.length ? prevState + 1 : prevState));
    setNormalizedIndex((prevState) => prevState + 1);
  }, [itemGroups, normalizedIndex]);

  /**
   *
   * @type {() => boolean}
   */
  const forwardDisabled = useCallback(() => itemGroups && index > itemGroups.length, [index, itemGroups]);

  /**
   * Allow us to move backwards in our forms
   * @type {() => void}
   */
  const back = useCallback(() => {
    if (!itemGroups) {
      return;
    }
    /**
     * We've reached the end
     */
    if (normalizedIndex === 1) {
      return;
    }
    setIndex((prevState) => (itemGroups.length > prevState ? prevState - 1 : prevState));
    setNormalizedIndex((prevState) => prevState - 1);
  }, [itemGroups, normalizedIndex]);

  return { index, next, back, forwardDisabled, activeGroupId };
}
