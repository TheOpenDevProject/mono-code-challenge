import { Flex } from "../Flex";
import styled from "styled-components";
import { Text } from "../Text";

interface ISeparatorLine {
  color?: string;
}

const SeparatorLineStart = styled(Flex)<ISeparatorLine>`
  height: 1px;
  background: ${(props) => (props.color ? props.color : "#d8d8d8")};
  flex-grow: 1;
`;

const SeparatorLineEnd = styled(Flex)<ISeparatorLine>`
  height: 1px;
  background: ${(props) => (props.color ? props.color : "#d8d8d8")};
  flex-grow: 55;
`;

export function Separator({ label, color }: { label?: string; color?: string }) {
  if (!label) return <SeparatorLineEnd />;

  return (
    <Flex alignItems={"center"}>
      <SeparatorLineStart color={color} />
      <Flex flexStyles={{ minWidth: "10.5rem" }} alignItems={"center"} justifyContent={"center"}>
        <Text fontStyles={{ paddingLeft: "2rem", paddingRight: "2rem" }}>{label}</Text>
      </Flex>
      <SeparatorLineEnd color={color} />
    </Flex>
  );
}
