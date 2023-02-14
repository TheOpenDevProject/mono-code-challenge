import { Flex } from "../Flex";
import styled from "styled-components";

const GroupContainer = styled(Flex)`
  background: #fff;
  box-shadow: 0 3px 6px rgb(0 0 0 / 3%), 0 3px 6px rgb(0 0 0 / 0%);
  padding: 1rem;
  flex-direction: column;
  gap: 1rem;
  border-radius: 1em;
  max-width: 100vw;
  margin: 10px;
`;

export interface IFormItemGroup {
  children: React.ReactElement | React.ReactElement[];
  fillHorizontal?: boolean;
}

export function FormItemGroup(props: IFormItemGroup) {
  const { children, fillHorizontal } = props;

  return (
    <GroupContainer flexStyles={{ flexGrow: fillHorizontal ? "1" : "0" }}>
      <Flex flexDirection={"column"} flexGap={"1rem"}>
        {children}
      </Flex>
    </GroupContainer>
  );
}
