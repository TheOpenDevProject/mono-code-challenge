import styled from "styled-components";
import { toCSS } from "../Tools/toCSS";

export type ICardStyles = Partial<CSSStyleDeclaration>;

/**
 * Base card props
 */
export interface ICardProps {
  children?: string | React.ReactNode | React.ReactNode[];
  display?: string;
  flexDirection?: string;
  borderTop?: string;
  marginLeft?: string;
  marginRight?: string;
  colSpan?: string;
  rowSpan?: string;
  cardStyles?: ICardStyles;
}

/**
 * Base card styled component
 */
export const Card = styled.div<ICardProps>`
  background: #fff;
  padding: 1rem;
  border-radius: 1em;
  box-shadow: 0 3px 6px rgb(0 0 0 / 3%), 0 3px 6px rgb(0 0 0 / 0%);
  display: flex;
  flex: 1 auto;
  flex-direction: column;
  align-items: center;
  color: initial;
  ${(props) => props.cardStyles && toCSS(props.cardStyles)}
`;
