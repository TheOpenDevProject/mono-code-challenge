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

export var GridItem = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      ["\n  grid-column: ", " / ", ";\n  grid-row: ", " / ", ";\n"],
      ["\n  grid-column: ", " / ", ";\n  grid-row: ", " / ", ";\n"]
    )),
  function (props) {
    return props.startColumn;
  },
  function (props) {
    return props.endColumn;
  },
  function (props) {
    return props.startRow;
  },
  function (props) {
    return props.endRow;
  }
);
var templateObject_1;
