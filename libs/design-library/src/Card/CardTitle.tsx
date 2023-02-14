import styled from "styled-components";
import { TitleCardAlignment } from "./Card.enums";

export interface TitleProps {
  textAlign?: TitleCardAlignment;
}

export const CardTitle = styled.div<TitleProps>`
  color: #4f4e69;
  font-style: normal;
  font-weight: 500;
  font-size: 1.25rem;
  word-break: break-word;
  padding: 1rem 0.5rem;
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-radius: 0.25rem 0.25rem 0 0;
`;
