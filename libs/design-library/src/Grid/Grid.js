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

export var Grid = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-template-rows: repeat(", ", 1fr);\n"],
      ["\n  display: grid;\n  grid-template-columns: repeat(", ", 1fr);\n  grid-template-rows: repeat(", ", 1fr);\n"]
    )),
  function (props) {
    return props.columns;
  },
  function (props) {
    return props.rows;
  }
);
var templateObject_1;
