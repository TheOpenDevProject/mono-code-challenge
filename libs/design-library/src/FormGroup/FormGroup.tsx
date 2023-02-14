import { ReactNode } from "react";
import { FontSize, FontWeight, Text } from "../Text";
import { Flex } from "../Flex";

export interface IFormGroup {
  children: ReactNode[];
  title: string;
}

export function FormItemGroup(props: IFormGroup) {
  const { title, children } = props;
  return (
    <Flex justifyContent={"center"} flexDirection={"column"} key={Math.random()}>
      <Flex flexDirection={"column"} flexGap={"1.5rem"}>
        <Flex>
          <Text fontSize={FontSize.xLarge} fontWeight={FontWeight.heavy}>
            {title}
          </Text>
        </Flex>
        <Flex flexDirection={"column"} flexGap={"1rem"}>
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
}
