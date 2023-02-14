import { ComponentType, lazy } from "react";
import { IComponentDefinitionMap } from "@scylla-digital/athena-forms-react";

export default {
  "text-input": {
    lazyComponent: lazy(() => import("@scylla-digital/design-library").then((m) => ({ default: m.TextInput as any }))),
  },
  "area-input": {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lazyComponent: lazy(() => import("@scylla-digital/design-library").then((m) => ({ default: m.TextArea as any }))),
  },
  "rating-zone": {
    lazyComponent: lazy(() =>
      import("@scylla-digital/design-library").then((m) => ({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        default: m.RatingZoneHOC as any,
      }))
    ),
  },

  "description-block": {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    lazyComponent: lazy<ComponentType<any>>(() => import("@scylla-digital/design-library").then((m) => ({ default: m.DescriptionBlock }))),
    defaultProps: {},
  },
} as IComponentDefinitionMap;
