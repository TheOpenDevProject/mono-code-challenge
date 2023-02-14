import styled from "styled-components";
import React from "react";
import { toCSS } from "../Tools/toCSS";

export interface IGridProps {
  columns: number;
  rows: number;
  children?: JSX.Element | JSX.Element[] | React.ReactNode;
  fullHeight?: boolean;
  gridStyles?: Partial<CSSStyleDeclaration>;
}

export const Grid = styled.div<IGridProps>`
  display: grid;
  grid-template-columns: repeat(${(props) => props.columns}, 1fr);
  grid-template-rows: repeat(${(props) => props.rows}, 1fr);
  height: ${(props) => (props.fullHeight ? "100%" : "initial")};
  ${(props) => props.gridStyles && toCSS(props.gridStyles)}
`;
