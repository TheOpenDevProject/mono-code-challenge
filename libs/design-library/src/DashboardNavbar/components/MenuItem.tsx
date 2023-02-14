import { Link as RRLink } from "react-router-dom";
import { Flex } from "../../Flex";
import { Text } from "../../Text";
import styled from "styled-components";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

export interface IMenuItem {
  children: string;
  to: string;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
}

const LinkItem = styled(Flex)`
  color: #9a9aa9;
  cursor: pointer;
  padding: 0.5rem 1rem;
  border-left: rgba(80, 142, 250, 0) 3px solid;
  border-radius: 1rem;
  width: 100%;

  &:hover {
    background: #f3f3f3;
  }
`;

const Link = styled(RRLink)`
  text-decoration: none;
`;

export function MenuItem(props: IMenuItem) {
  const { children, to, Icon } = props;
  return (
    <Link to={to}>
      <LinkItem flexDirection={"row"} alignItems={"center"} flexGap={"1rem"} flex={"1 auto"} flexGrow={1}>
        <Icon />
        <Text>{children}</Text>
      </LinkItem>
    </Link>
  );
}
