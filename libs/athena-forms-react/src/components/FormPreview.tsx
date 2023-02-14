import { IAthenaForm } from "../types";
import { useRegisteredComponents } from "../hooks/useRegisteredComponents";
import { useFormFlow } from "../hooks/useFormFlow";
import { useFormRender } from "../hooks/useFormRender";

export function FormPreview(props: Omit<IAthenaForm, "onRenderFrame" | "initialValue" | "enableAlternativeRender" | "onChange">) {
  const { schema, componentRegistry } = props;
  const registeredComponents = useRegisteredComponents(componentRegistry);
  const { currentFrame, setActiveFrame } = useFormFlow(schema);
  const { frame } = useFormRender(
    {
      registeredComponents,
      currentFrame: currentFrame,
      renderType: "preview",
    },
    {
      goToFrame: setActiveFrame,
      nextGroup: () => "",
      prevGroup: () => "",
    }
  );
  return <>{frame && frame}</>;
}
