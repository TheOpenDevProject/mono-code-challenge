import { Flex, IFlexStyles } from "../../Flex";

const menuItemContainerStyles: IFlexStyles = {
  background: "#FFFFFF",
  border: "1px solid rgba(0, 0, 0, 0.2)",
  height: "5rem",
};

interface IMenuItemContainer {
  children: React.ReactNode | React.ReactNode[];
}

export function MenuItemContainer(props: IMenuItemContainer) {
  return (
    <Flex flexDirection={"column"} flexStyles={menuItemContainerStyles}>
      {props.children}
    </Flex>
  );
}
