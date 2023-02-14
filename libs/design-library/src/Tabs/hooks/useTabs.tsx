import { ReactElement, useCallback, useState } from "react";
import { ITabGroupProps } from "../TabGroup";

export function useTabs(tabs?: Array<ReactElement<ITabGroupProps>>) {
  const [index, setIndex] = useState<number>(0);
  const [normalizedIndex, setNormalizedIndex] = useState<number>(index + 1);

  /**
   * This will render the current item
   * @type {() => void}
   */
  const render = useCallback(() => {
    if (tabs === undefined || tabs.length === 0) {
      return "Something went wrong...";
    }
    return tabs[index];
  }, [tabs, index]);

  /**
   * Allow us to move forward in our forms.
   * @type {() => void}
   */
  const next = useCallback(() => {
    /**
     * We've reached the end
     */
    if (tabs === undefined || normalizedIndex >= tabs.length) {
      return;
    }

    setIndex((prevState) => (prevState < tabs.length ? prevState + 1 : prevState));
    setNormalizedIndex((prevState) => prevState + 1);
  }, [tabs, setIndex, normalizedIndex]);

  /**
   *
   * @type {() => boolean}
   */
  const forwardDisabled = useCallback(() => tabs !== undefined && index > tabs.length, [index, tabs]);

  /**
   * Allow us to move backwards in our forms
   * @type {() => void}
   */
  const back = useCallback(() => {
    /**
     * We've reached the end
     */
    if (tabs === undefined || normalizedIndex === 1) {
      return;
    }
    setIndex((prevState) => (tabs.length > prevState ? prevState - 1 : prevState));
    setNormalizedIndex((prevState) => prevState - 1);
  }, [tabs, normalizedIndex]);

  return { render, index, next, back, forwardDisabled, setIndex };
}
