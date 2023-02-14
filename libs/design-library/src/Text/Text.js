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
import styled from "styled-components";
import { FontSize, FontWeight } from "./Text.enums";

export var Text = styled.span(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  white-space: pre-wrap;\n"],
      ["\n  font-size: ", ";\n  font-weight: ", ";\n  color: ", ";\n  white-space: pre-wrap;\n"]
    )),
  function (props) {
    var _a;
    return (_a = props.fontSize) !== null && _a !== void 0 ? _a : FontSize.small;
  },
  function (props) {
    var _a;
    return (_a = props.fontWeight) !== null && _a !== void 0 ? _a : FontWeight.medium;
  },
  function (props) {
    return props.fontStyles ? (props.fontStyles.color ? props.fontStyles.color : "#000") : "#000";
  }
);
var templateObject_1;
