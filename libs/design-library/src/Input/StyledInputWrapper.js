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

export var StyledInputWrapper = styled.span(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  input[type='text'],\n  input[type='password'],\n  input[type='email'] {\n  {\n    border-top: 3px solid rgba(0, 0, 0, 0);\n    border-right: 3px solid rgba(0, 0, 0, 0);\n    border-left: 3px solid rgba(0, 0, 0, 0);\n    font-size: 1rem;\n    transition: border-bottom-color 250ms;\n    background: ",
        ";\n    padding: 1rem;\n    flex: 1;\n    border-bottom: ",
        ";\n    &:focus {\n      outline: none;\n      border-bottom: 3px solid #afafaf;\n    }\n\n    &:invalid {\n      outline: none;\n      border-bottom: 3px solid #f44336;\n    }\n\n\n    &:required {\n      &:focus {\n        outline: none;\n        border-bottom: 3px solid #faaf34;\n      }\n    }\n  }\n",
      ],
      [
        "\n  input[type='text'],\n  input[type='password'],\n  input[type='email'] {\n  {\n    border-top: 3px solid rgba(0, 0, 0, 0);\n    border-right: 3px solid rgba(0, 0, 0, 0);\n    border-left: 3px solid rgba(0, 0, 0, 0);\n    font-size: 1rem;\n    transition: border-bottom-color 250ms;\n    background: ",
        ";\n    padding: 1rem;\n    flex: 1;\n    border-bottom: ",
        ";\n    &:focus {\n      outline: none;\n      border-bottom: 3px solid #afafaf;\n    }\n\n    &:invalid {\n      outline: none;\n      border-bottom: 3px solid #f44336;\n    }\n\n\n    &:required {\n      &:focus {\n        outline: none;\n        border-bottom: 3px solid #faaf34;\n      }\n    }\n  }\n",
      ]
    )),
  function (props) {
    return props.displayMode === "light" ? "#fff" : "#e5e5e5";
  },
  function (props) {
    return props.displayMode === "light" ? "3px solid $afafaf" : "none";
  }
);
var templateObject_1;
