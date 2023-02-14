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
import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CardTitle } from "./CardTitle";
import { Card } from "./Card";
import { CardContextMenuButton } from "./CardContextMenuButton";
import { MoreHoriz } from "@material-ui/icons";
import { Flex } from "../Flex";

export function TitleCard(props) {
  var title = props.title,
    borderTop = props.borderTop,
    display = props.display,
    flexDirection = props.flexDirection,
    onTitleRender = props.onTitleRender,
    children = props.children;
  //Hack for storybook until we know how to force it to be undefined
  var _callOnTitleRender = (onTitleRender === null || onTitleRender === void 0 ? void 0 : onTitleRender.name) !== "actionHandler";
  return _jsxs(
    Card,
    __assign(
      { borderTop: borderTop, display: display, flexDirection: flexDirection },
      {
        children: [
          _jsx(
            Flex,
            {
              children: _jsx(
                CardTitle,
                {
                  children:
                    _callOnTitleRender && onTitleRender
                      ? onTitleRender(props)
                      : _jsxs(
                          _Fragment,
                          {
                            children: [title, _jsx(CardContextMenuButton, { children: _jsx(MoreHoriz, {}, void 0) }, void 0)],
                          },
                          void 0
                        ),
                },
                void 0
              ),
            },
            void 0
          ),
          children,
        ],
      }
    ),
    void 0
  );
}
