import styled, { css } from "styled-components";

import { ButtonSize } from "./Button.enums";
import { ButtonType } from "./Button.types";
import { ReactElement } from "react";
import { createButtonSize, createButtonStyles } from "./Button.fn";

/**
 * Button Props for the StyledButton
 */
export interface IStyledButtonProps {
  buttonType: ButtonType;
  buttonSize: ButtonSize;
}

/**
 * Props for the actual button component
 */
export interface IButtonProps extends IStyledButtonProps {
  children?: ReactElement | string;
  onClick?: () => void;
  disabled?: boolean;
}

export const StyledButton = styled.button<IStyledButtonProps>`
  border: none;
  cursor: pointer;
  color: #fff;
  border-radius: 6px;
  &:disabled {
    ${createButtonStyles("disabled")}
  }

  ${(props) => css`
    ${createButtonStyles(props.buttonType)}
    ${createButtonSize(props.buttonSize)}
  `}

  font-weight: bolder;
`;

export function Button(props: IButtonProps) {
  const { children, buttonType, buttonSize, onClick, disabled } = props;
  return (
    <StyledButton
      buttonSize={buttonSize}
      buttonType={buttonType}
      onClick={(ev) => {
        ev.preventDefault();
        ev.stopPropagation();
        onClick && onClick();
      }}
      disabled={disabled}
    >
      {children}
    </StyledButton>
  );
}
