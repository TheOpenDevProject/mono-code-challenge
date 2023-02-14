import { ITabGroupProps } from "./TabGroup";
import { ReactElement, useMemo } from "react";
import { useTabs } from "./hooks/useTabs";
import { Flex } from "../Flex";
import styled from "styled-components";

export interface ITabsProps {
  children?: Array<ReactElement<ITabGroupProps>>;
}

const TabButton = styled(Flex)`
  padding: 0.5rem 1.5rem;
  cursor: pointer;
  border-radius: 0.75rem;
  color: #4f46e5;

  background: #eef2ff;

  &[data-active] {
    background: #aed276;
    color: #fff;
    font-weight: bold;
  }
`;

export function Tabs(props: ITabsProps) {
  const { children } = props;
  const { render, setIndex, index: activeIndex } = useTabs(children);
  const tabButtons = useMemo(() => {
    return (
      <Flex flexDirection={"row"} flexGap={"0.5rem"} flexStyles={{ padding: "1.5rem" }}>
        {children?.map((item, index) => {
          if (index === activeIndex) {
            return (
              <TabButton data-active onClick={() => setIndex(index)}>
                {item.props.tabGroupTitle}
              </TabButton>
            );
          }
          return <TabButton onClick={() => setIndex(index)}>{item.props.tabGroupTitle}</TabButton>;
        })}
      </Flex>
    );
  }, [children, activeIndex, setIndex]);

  return (
    <Flex flexGrow={1} justifyContent={"space-between"} flexDirection={"column"}>
      {tabButtons}
      <Flex> {render()}</Flex>
    </Flex>
  );
}
