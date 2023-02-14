export type FlexDirections = "row" | "column" | "row-reverse" | "column-reverse";

export type FlexBasis = "auto" | "inherit" | string | number;

export type FlexAlignItems = "normal" | "stretch" | "center" | "start" | "end" | "flex-start" | "flex-end";

/**
 * Properties that are not directly a flex related style go here.
 */
export type IFlexStyles = Partial<CSSStyleDeclaration>;
