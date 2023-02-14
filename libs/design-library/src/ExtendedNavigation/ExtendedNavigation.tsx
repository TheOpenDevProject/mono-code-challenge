import styled from "styled-components";
import { Flex } from "../Flex";
import { UserProfile } from "./UserProfile";
import { AppsRounded, SearchRounded } from "@mui/icons-material";
import { TextInput } from "../TextInput";

const ExtendedNavigationContainer = styled(Flex)`
  background: #fff;
  flex: 1 auto;
  gap: 0.8rem;
  box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.09);
`;

export interface IExtendedNavigation {
  fullName: string;
  orgName: string;
}

export function ExtendedNavigation(props: IExtendedNavigation) {
  const { fullName, orgName } = props;
  return (
    <ExtendedNavigationContainer>
      <Flex flexGrow={0.3} alignItems={"center"} justifyContent={"center"}>
        <AppsRounded />
      </Flex>
      <Flex flexGrow={4} alignItems={"center"} justifyContent={"center"}>
        <Flex flexGrow={1} flex={"1 auto"}>
          <TextInput styles={{ width: "100%" }} type={"search"} Icon={SearchRounded} placeholder={"Search Projects, Navigation and more..."} />
        </Flex>
      </Flex>
      <Flex justifyContent={"flex-end"} flexGrow={0.1}>
        <UserProfile name={`${fullName} | ${orgName}`} image={"https://picsum.photos/200"} email={""} />
      </Flex>
    </ExtendedNavigationContainer>
  );
}
