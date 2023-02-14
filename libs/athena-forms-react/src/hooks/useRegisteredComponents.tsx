import { IComponentDefinitionMap, ILazyComponentDefinition, IPreloadedComponent } from "../types";
import React, { useEffect, useState } from "react";
import { convertKeysToIterable } from "../functions/LoopObject";

export type ComponentRegistry = Map<string, IPreloadedComponent>;

export function useRegisteredComponents(componentSchema: IComponentDefinitionMap): ComponentRegistry | undefined {
  const [componentRegistry, setComponentRegistry] = useState<ComponentRegistry>();

  useEffect(() => {
    const qualifiedComponents: ComponentRegistry = new Map<string, IPreloadedComponent>();
    for (const key of convertKeysToIterable(componentSchema)) {
      const componentDefinition: ILazyComponentDefinition = componentSchema[key];
      qualifiedComponents.set(key, {
        component: React.createElement(componentDefinition.lazyComponent, componentDefinition.defaultProps),
        props: componentDefinition.defaultProps ?? {},
      });
    }
    setComponentRegistry(qualifiedComponents);
  }, [componentSchema]);

  return componentRegistry;
}
