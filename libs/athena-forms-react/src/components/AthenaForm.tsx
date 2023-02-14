import { IAthenaForm } from "../types";
import { useRegisteredComponents } from "../hooks/useRegisteredComponents";
import { useFormRender } from "../hooks/useFormRender";
import { useFormFlow } from "../hooks/useFormFlow";
import { useEffect } from "react";

export function AthenaForm(props: IAthenaForm) {
  const { componentRegistry, schema, onChange, onRenderFrame, enableAlternativeRender, initialValue } = props;
  const registeredComponents = useRegisteredComponents(componentRegistry);
  const { currentFrame, setActiveFrame } = useFormFlow(schema);
  const { frame, state } = useFormRender(
    {
      registeredComponents,
      currentFrame: currentFrame,
      onRenderFrame,
      renderType: enableAlternativeRender ? "alternative" : "default",
    },
    {
      goToFrame: setActiveFrame,
      nextGroup: () => "",
      prevGroup: () => "",
    },
    initialValue
  );

  useEffect(() => {
    onChange && onChange(state);
  }, [onChange, state]);

  return <>{frame && frame}</>;
}
