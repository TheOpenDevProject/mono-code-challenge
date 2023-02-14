import { Flex, FontSize, Text } from "..";

export interface IDescriptionBlock {
  title: string;
  description: string;
}

export const DescriptionBlock = (props: IDescriptionBlock) => {
  const { title, description } = props;
  return (
    <Flex flexDirection={"column"} flexGap={"2rem"}>
      <Flex>
        <Text fontSize={FontSize.xxLarge}>{title}</Text>
      </Flex>
      <Flex>
        <Text fontSize={FontSize.large}>{description}</Text>
      </Flex>
    </Flex>
  );
};
