import styled from "styled-components";
import { FlexAlignItems, FlexBasis, FlexDirections, IFlexStyles } from "./Flex.types";
import { toCSS } from "../Tools/toCSS";

export interface IFlex {
  flexDirection?: FlexDirections;
  alignItems?: FlexAlignItems;
  flexGrow?: number;
  flexShrink?: number;
  flexBasis?: FlexBasis;
  flex?: string;
  justifyContent?: FlexBasis;
  childGap?: string;
  flexWrap?: string;
  flexGap?: string;
  flexStyles?: IFlexStyles;
  overflow?: "auto" | "visible" | "initial" | "hidden";
  overflowX?: "auto" | "visible" | "initial" | "hidden";
  overflowY?: "auto" | "visible" | "initial" | "hidden";
  padding?: string;
}

export const Flex = styled.div<IFlex>`
  display: flex;
  position: relative;
  box-sizing: border-box;
  flex-direction: ${(p) => p.flexDirection ?? "row"};
  align-items: ${(p) => p.alignItems ?? "initial"};
  flex: ${(p) => p.flex ?? "initial"};
  justify-content: ${(p) => p.justifyContent ?? "normal"};
  gap: ${(p) => p.childGap ?? "0"};
  flex-wrap: ${(p) => p.flexWrap ?? "nowrap"};
  gap: ${(p) => p.flexGap ?? "0"};
  flex-grow: ${(p) => p.flexGrow ?? 0};
  flex-shrink: ${(p) => p.flexShrink ?? 0};
  ${(props) => props.flexStyles && toCSS(props.flexStyles)}
`;
