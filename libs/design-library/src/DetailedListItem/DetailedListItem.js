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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex } from "../Flex";
import { Button, ButtonSize } from "../Button";
import { FontSize, FontWeight, Text } from "../Text";

var timeStampFontStyle = {
  color: "#797979",
};
var personaFontStyle = {
  color: "#9dce13",
};
var activityFeedStyles = {
  background: "#fff",
  padding: "1rem",
  borderBottom: "1px solid #eeeeee",
};
export function DetailedListItem(props) {
  var timeStamp = props.timeStamp,
    eventLabel = props.eventLabel,
    eventMetadata = props.eventMetadata,
    actionBy = props.actionBy;
  return _jsxs(
    Flex,
    __assign(
      { justifyContent: "space-between", flexStyles: activityFeedStyles },
      {
        children: [
          _jsxs(
            Flex,
            __assign(
              { flexDirection: "column" },
              {
                children: [
                  _jsx(Text, __assign({ fontWeight: FontWeight.lightest, fontSize: FontSize.small, fontStyles: timeStampFontStyle }, { children: timeStamp }), void 0),
                  _jsx(Text, __assign({ fontSize: FontSize.large }, { children: eventLabel }), void 0),
                  _jsxs(
                    Flex,
                    {
                      children: [
                        _jsx(Text, __assign({ fontStyles: personaFontStyle, fontSize: FontSize.medium }, { children: actionBy + " " }), void 0),
                        _jsx(Text, __assign({ fontSize: FontSize.medium }, { children: eventMetadata }), void 0),
                      ],
                    },
                    void 0
                  ),
                ],
              }
            ),
            void 0
          ),
          _jsx(
            Flex,
            {
              children: _jsx(Button, __assign({ buttonSize: ButtonSize.M, buttonType: "primary" }, { children: "View More" }), void 0),
            },
            void 0
          ),
        ],
      }
    ),
    void 0
  );
}
