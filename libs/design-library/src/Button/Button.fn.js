var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, "raw", { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
import { css } from "styled-components";
import { ButtonSize } from "./Button.enums";

export var createButtonSize = function (buttonSize) {
  switch (buttonSize) {
    case ButtonSize.S:
      return css(
        templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        padding: 0.45rem;\n      "], ["\n        padding: 0.45rem;\n      "]))
      );
    case ButtonSize.M:
      return css(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n        padding: 1rem;\n      "], ["\n        padding: 1rem;\n      "])));
    case ButtonSize.L:
      return css(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n        padding: 1.5rem;\n      "], ["\n        padding: 1.5rem;\n      "])));
    default:
      return css(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n        padding: 0.5rem;\n      "], ["\n        padding: 0.5rem;\n      "])));
  }
};
export var createButtonStyles = function (buttonKind) {
  switch (buttonKind) {
    case "primary":
      return css(
        templateObject_5 ||
          (templateObject_5 = __makeTemplateObject(
            ["\n        color: #fff;\n        background: #0277ee;\n\n        &:hover {\n          background: #025ebb;\n        }\n      "],
            ["\n        color: #fff;\n        background: #0277ee;\n\n        &:hover {\n          background: #025ebb;\n        }\n      "]
          ))
      );
    case "secondary":
      return css(
        templateObject_6 ||
          (templateObject_6 = __makeTemplateObject(
            ["\n        color: #fff;\n        background: #7895b2;\n\n        &:hover {\n          background: #556a7f;\n        }\n      "],
            ["\n        color: #fff;\n        background: #7895b2;\n\n        &:hover {\n          background: #556a7f;\n        }\n      "]
          ))
      );
    case "danger":
      return css(
        templateObject_7 ||
          (templateObject_7 = __makeTemplateObject(
            ["\n        color: #fff;\n        background: #bb151e;\n\n        &:hover {\n          background: #ca1621;\n        }\n      "],
            ["\n        color: #fff;\n        background: #bb151e;\n\n        &:hover {\n          background: #ca1621;\n        }\n      "]
          ))
      );
    default:
      return css(
        templateObject_8 ||
          (templateObject_8 = __makeTemplateObject(
            ["\n        color: #fff;\n        background: #000;\n      "],
            ["\n        color: #fff;\n        background: #000;\n      "]
          ))
      );
  }
};
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8;
