import { Flex } from "../Flex";
import { IMenuItem } from "./components/MenuItem";
import { ReactElement } from "react";
import styled from "styled-components";
import { NavHeader } from "./components/NavHeader";
import { UserProfile } from "../ExtendedNavigation/UserProfile";

interface IDashboardNavbarProps {
  children?: ReactElement<IMenuItem>[] | ReactElement<IMenuItem>;
  username?: string;
  email?: string;
}

const DashboardNavbarContainer = styled(Flex)`
  background: #fff;
  height: 100%;
  flex: 1 auto;
  padding: 1rem 0.4rem;
`;

export function DashboardNavbar(props: IDashboardNavbarProps) {
  return (
    <DashboardNavbarContainer flexDirection={"column"} flexGap={"1.25rem"}>
      <Flex flexStyles={{ padding: "1rem" }}>
        <NavHeader />
      </Flex>
      <Flex flexDirection={"column"} flexGap={"1.25rem"} justifyContent={"center"}>
        {props.children}
      </Flex>
      <Flex flexGrow={1} alignItems={"end"}>
        <UserProfile name={props.username ?? "Unknown User"} image={"https://picsum.photos/200"} email={props.email ?? "Unknown Email"} />
      </Flex>
    </DashboardNavbarContainer>
  );
}
