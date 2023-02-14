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
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
import { jsx as _jsx } from "react/jsx-runtime";
import styled, { css } from "styled-components";
import { createButtonSize, createButtonStyles } from "./Button.fn";

export var StyledButton = styled.button(
  templateObject_2 ||
    (templateObject_2 = __makeTemplateObject(
      ["\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 6px;\n  ", "\n\n  font-weight: bolder;\n"],
      ["\n  border: none;\n  cursor: pointer;\n  color: #fff;\n  border-radius: 6px;\n  ", "\n\n  font-weight: bolder;\n"]
    )),
  function (props) {
    return css(
      templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n    ", "\n    ", "\n  "], ["\n    ", "\n    ", "\n  "])),
      createButtonStyles(props.buttonType),
      createButtonSize(props.buttonSize)
    );
  }
);
export function Button(props) {
  var children = props.children,
    buttonType = props.buttonType,
    buttonSize = props.buttonSize;
  return _jsx(StyledButton, __assign({ buttonSize: buttonSize, buttonType: buttonType }, { children: children }), void 0);
}
var templateObject_1, templateObject_2;
