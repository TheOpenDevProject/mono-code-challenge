import { Flex } from "../Flex";
import { Text } from "../Text";

export interface TitleProps {
  title: string;
}

export function Title(props: TitleProps) {
  const { title } = props;
  return (
    <Flex flexStyles={{ padding: "1rem" }}>
      <Text fontSize={"2rem"}>{title}</Text>
    </Flex>
  );
}
