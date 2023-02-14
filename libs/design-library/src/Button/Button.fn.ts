import { css, FlattenSimpleInterpolation } from "styled-components";
import { ButtonSize } from "./Button.enums";
import { ButtonType } from "./Button.types";

export const createButtonSize = (buttonSize: ButtonSize): FlattenSimpleInterpolation => {
  switch (buttonSize) {
    case ButtonSize.S:
      return css`
        padding: 0.45rem;
      `;
    case ButtonSize.M:
      return css`
        padding: 1rem;
      `;
    case ButtonSize.L:
      return css`
        padding: 1.3rem 2.5rem;
      `;
    default:
      return css`
        padding: 0.5rem;
      `;
  }
};

export const createButtonStyles = (buttonKind: ButtonType): FlattenSimpleInterpolation => {
  switch (buttonKind) {
    case "primary":
      return css`
        background: #0452cc;
        border-radius: 4px;

        &:hover {
          background: #025ebb;
        }
      `;
    case "secondary":
      return css`
        color: #fff;
        background: #7895b2;

        &:hover {
          background: #556a7f;
        }
      `;
    case "danger":
      return css`
        color: #fff;
        background: #bb151e;

        &:hover {
          background: #ca1621;
        }
      `;
    case "disabled":
      return css`
        background: #979797;
        color: #fff;
        &:hover {
          background: #979797;
        }
      `;
    case "new_age":
      return css`
        background: linear-gradient(90deg, #3d67ff 0%, #5855cd 97.88%);
        border-radius: 6px;
        font-family: Roboto, sans-serif;
        font-style: normal;
        font-weight: 400;
      `;
    default:
      return css`
        color: #fff;
        background: #000;
      `;
  }
};
