import { Flex } from "../Flex";
import styled from "styled-components";
import { Text } from "../Text";

export interface IUserProfile {
  name: string;
  email: string;
  image: string;
}

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 0.8rem;
`;

export function UserProfile(props: IUserProfile) {
  const { name, email, image } = props;

  return (
    <Flex flexGap={"0.85rem"} flexGrow={1} alignItems={"center"}>
      <Flex>
        <ProfileImage src={image} alt={name} />
      </Flex>
      <Flex flexDirection={"column"} justifyContent={"space-between"}>
        <Text>{name}</Text>
        <Text>{email}</Text>
      </Flex>
    </Flex>
  );
}
