import { useMemo } from "react";
import { arrayToObject } from "../functions/arrayToObject";

export function useEditableProps<T>(props: Array<T>) {
  return useMemo<T>(() => {
    return arrayToObject<T>(props, "propKey", "propValue");
  }, [props]);
}
