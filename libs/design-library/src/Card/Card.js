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

/**
 * Base card styled component
 */
export var Card = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 100px 80px rgba(0, 0, 0, 0.07);\n  border-top: ",
        ";\n  border-radius: 0.25rem;\n  background: #fff;\n  display: ",
        ";\n  flex-direction: ",
        ";\n",
      ],
      [
        "\n  box-shadow: 0 6.7px 5.3px rgba(0, 0, 0, 0.028), 0 22.3px 17.9px rgba(0, 0, 0, 0.042), 0 100px 80px rgba(0, 0, 0, 0.07);\n  border-top: ",
        ";\n  border-radius: 0.25rem;\n  background: #fff;\n  display: ",
        ";\n  flex-direction: ",
        ";\n",
      ]
    )),
  function (props) {
    return props.borderTop ? props.borderTop : "none";
  },
  function (props) {
    return props.display ? props.display : "initial";
  },
  function (props) {
    return props.flexDirection ? props.flexDirection : "row";
  }
);
/**
 * Dead fucking weight from a sleepless night
 */
var TitleCardWrapper = styled.div(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
var templateObject_1, templateObject_2;
