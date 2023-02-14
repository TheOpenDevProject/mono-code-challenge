import { Flex, IFlexStyles } from "../Flex";
import { FontSize, FontWeight, Text } from "../Text";
import styled from "styled-components";

const SelectionGroupItemContainer = styled(Flex)`
  box-shadow: 0px 4px 9px -2px rgba(0, 0, 0, 0.19);
  border-radius: 4px;
  min-height: 8rem;

  &:hover {
    background: #eaeaea;
    cursor: pointer;
  }
`;

const avatarCardStyles: IFlexStyles = {
  background: "#FAFAFA",
  width: "15%",
};

export interface ISelectionGroupItem {
  title: string;
  description: string;
  imgSrc: string;
  onClick: () => void;
}

export const SelectionGroupItem = (props: ISelectionGroupItem) => {
  const { title, description, imgSrc, onClick } = props;

  return (
    <SelectionGroupItemContainer flexGap={"2rem"} onClick={onClick}>
      <Flex justifyContent={"center"} alignItems={"center"} flexStyles={avatarCardStyles}>
        <img width={"35px"} src={imgSrc} alt={"GeeMee"} />
      </Flex>
      <Flex flexDirection={"column"} flexGap={"1rem"} justifyContent={"center"} flex={"1 auto"} flexShrink={1}>
        <Flex>
          <Text fontSize={FontSize.xLarge}>{title}</Text>
        </Flex>
        <Flex>
          <Text fontSize={FontSize.medium} fontWeight={FontWeight.lightest}>
            {description}
          </Text>
        </Flex>
      </Flex>
    </SelectionGroupItemContainer>
  );
};

export default SelectionGroupItem;
