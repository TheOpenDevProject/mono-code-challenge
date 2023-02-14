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

export var Flex = styled.div(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        "\n  overflow-y: ",
        ";\n  overflow-x: ",
        ";\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: ",
        ";\n  padding: ",
        ";\n  height: ",
        ";\n  width: ",
        ";\n  background: ",
        ";\n  align-items: ",
        ";\n  flex: ",
        ";\n  flex-basis: ",
        ";\n  flex-grow: ",
        ";\n  flex-shrink: ",
        ";\n  justify-content: ",
        ";\n  gap: ",
        ";\n  border-top: ",
        ";\n  border-right: ",
        ";\n  border-bottom: ",
        ";\n  border-left: ",
        ";\n  flex-wrap: ",
        ";\n  gap: ",
        ";\n",
      ],
      [
        "\n  overflow-y: ",
        ";\n  overflow-x: ",
        ";\n  display: flex;\n  position: relative;\n  box-sizing: border-box;\n  flex-direction: ",
        ";\n  padding: ",
        ";\n  height: ",
        ";\n  width: ",
        ";\n  background: ",
        ";\n  align-items: ",
        ";\n  flex: ",
        ";\n  flex-basis: ",
        ";\n  flex-grow: ",
        ";\n  flex-shrink: ",
        ";\n  justify-content: ",
        ";\n  gap: ",
        ";\n  border-top: ",
        ";\n  border-right: ",
        ";\n  border-bottom: ",
        ";\n  border-left: ",
        ";\n  flex-wrap: ",
        ";\n  gap: ",
        ";\n",
      ]
    )),
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.overflowY) !== null && _a !== void 0 ? _a : "visible";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.overflow) !== null && _a !== void 0 ? _a : "visible";
  },
  function (p) {
    var _a;
    return (_a = p.flexDirection) !== null && _a !== void 0 ? _a : "row";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.padding) !== null && _a !== void 0 ? _a : 0;
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.height) !== null && _a !== void 0 ? _a : "initial";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.width) !== null && _a !== void 0 ? _a : "auto";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.background) !== null && _a !== void 0 ? _a : "transparent";
  },
  function (p) {
    var _a;
    return (_a = p.alignItems) !== null && _a !== void 0 ? _a : "initial";
  },
  function (p) {
    var _a;
    return (_a = p.flex) !== null && _a !== void 0 ? _a : "none";
  },
  function (p) {
    var _a;
    return (_a = p.flexBasis) !== null && _a !== void 0 ? _a : "initial";
  },
  function (p) {
    var _a;
    return (_a = p.flexGrow) !== null && _a !== void 0 ? _a : 0;
  },
  function (p) {
    var _a;
    return (_a = p.flexShrink) !== null && _a !== void 0 ? _a : 0;
  },
  function (p) {
    var _a;
    return (_a = p.justifyContent) !== null && _a !== void 0 ? _a : "normal";
  },
  function (p) {
    var _a;
    return (_a = p.childGap) !== null && _a !== void 0 ? _a : "0";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.borderTop) !== null && _a !== void 0 ? _a : "none";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.borderRight) !== null && _a !== void 0 ? _a : "none";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.borderBottom) !== null && _a !== void 0 ? _a : "none";
  },
  function (p) {
    var _a;
    return (_a = p.flexStyles && p.flexStyles.borderLeft) !== null && _a !== void 0 ? _a : "none";
  },
  function (p) {
    var _a;
    return (_a = p.flexWrap) !== null && _a !== void 0 ? _a : "nowrap";
  },
  function (p) {
    var _a;
    return (_a = p.flexGap) !== null && _a !== void 0 ? _a : "0";
  }
);
var templateObject_1;
