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
import { useMemo } from "react";
import { StyledInputWrapper } from "./StyledInputWrapper";
import { Flex } from "../Flex";

export function Input(props) {
  var displayMode = props.displayMode,
    onChange = props.onChange;
  var sanitizeInputProps = useMemo(
    function () {
      var sanitizedProps = __assign({}, props);
      delete sanitizedProps["displayMode"];
      return sanitizedProps;
    },
    [props]
  );
  return _jsx(
    Flex,
    {
      children: _jsx(
        StyledInputWrapper,
        __assign(
          { displayMode: displayMode },
          {
            children: _jsx(
              "input",
              __assign({ autoComplete: "off" }, sanitizeInputProps, {
                onChange: function (e) {
                  return onChange ? onChange(e) : null;
                },
              }),
              "sa"
            ),
          }
        ),
        void 0
      ),
    },
    void 0
  );
}
