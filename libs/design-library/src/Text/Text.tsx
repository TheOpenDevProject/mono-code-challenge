import styled from "styled-components";
import { FontSize, FontWeight } from "./Text.enums";
import { toCSS } from "../Tools/toCSS";

export type ITextStyles = Partial<CSSStyleDeclaration>;

export interface IText {
  fontSize?: FontSize | string;
  fontWeight?: FontWeight;
  fontStyles?: ITextStyles;
  children: React.ReactElement[] | React.ReactElement | string;
}

export const Text = styled.span<IText>`
  display: flex;
  font-size: ${(props) => props.fontSize ?? FontSize.small};
  font-weight: ${(props) => props.fontWeight ?? FontWeight.medium};
  ${(props) => props.fontStyles && toCSS(props.fontStyles)}
`;
