import { CardTitle } from "./CardTitle";
import { Card, ICardProps } from "./Card";
import { forwardRef, ReactNode } from "react";
import { CardContextMenuButton } from "./CardContextMenuButton";
import { MoreHoriz } from "@mui/icons-material";
import { Flex } from "../Flex";

export interface ITitleCardProps extends ICardProps {
  children?: ReactNode | ReactNode[];
  title: string;
  maxHeight?: string;
  onTitleRender?: (props: ITitleCardProps) => ReactNode;
}

export const TitleCard = forwardRef<HTMLDivElement, ITitleCardProps>((props, ref) => {
  const { title, borderTop, display, flexDirection, onTitleRender, children, colSpan, rowSpan } = props;

  //Hack for storybook until we know how to force it to be undefined
  const _callOnTitleRender = onTitleRender?.name !== "actionHandler";
  return (
    <Card borderTop={borderTop} display={display} flexDirection={flexDirection} colSpan={colSpan} rowSpan={rowSpan} ref={ref}>
      <Flex flex={"1 auto"} flexStyles={{ width: "100%" }}>
        <CardTitle>
          {_callOnTitleRender && onTitleRender ? (
            onTitleRender(props)
          ) : (
            <>
              {title}
              <CardContextMenuButton>
                <MoreHoriz />
              </CardContextMenuButton>
            </>
          )}
        </CardTitle>
      </Flex>
      {children}
    </Card>
  );
});
