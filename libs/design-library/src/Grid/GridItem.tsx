import styled from "styled-components";
import { toCSS } from "../Tools/toCSS";

export type IGridItemStyles = Partial<CSSStyleDeclaration>;

export interface GridItemProps {
  startColumn: number;
  endColumn: number;
  startRow: number;
  endRow: number;
  gridItemStyles?: IGridItemStyles;
}

export const GridItem = styled.div<GridItemProps>`
  grid-column: ${(props) => props.startColumn} / ${(props) => props.endColumn};
  grid-row: ${(props) => props.startRow} / ${(props) => props.endRow};
  ${(props) => props.gridItemStyles && toCSS(props.gridItemStyles)}
`;
