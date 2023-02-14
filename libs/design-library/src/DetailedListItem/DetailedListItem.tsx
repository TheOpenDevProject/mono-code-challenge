import { Flex, IFlexStyles } from "../Flex";
import { Button, ButtonSize } from "../Button";
import { FontSize, FontWeight, ITextStyles, Text } from "../Text";

const timeStampFontStyle: ITextStyles = {
  color: "#797979",
};

const personaFontStyle: ITextStyles = {
  color: "#9dce13",
};

const activityFeedStyles: IFlexStyles = {
  background: "#fff",
  padding: "1rem",
  borderBottom: "1px solid #eeeeee",
};

export interface IDetailedListItem {
  timeStamp: string;
  eventLabel: string;
  actionBy: string;
  eventMetadata: string;
}

export function DetailedListItem(props: IDetailedListItem) {
  const { timeStamp, eventLabel, eventMetadata, actionBy } = props;
  return (
    <Flex justifyContent={"space-between"} flexStyles={activityFeedStyles}>
      <Flex flexDirection={"column"}>
        <Text fontWeight={FontWeight.lightest} fontSize={FontSize.small} fontStyles={timeStampFontStyle}>
          {timeStamp}
        </Text>
        <Text fontSize={FontSize.large}>{eventLabel}</Text>
        <Flex>
          <Text fontStyles={personaFontStyle} fontSize={FontSize.medium}>
            {actionBy + " "}
          </Text>
          <Text fontSize={FontSize.medium}>{eventMetadata}</Text>
        </Flex>
      </Flex>
      <Flex>
        <Button buttonSize={ButtonSize.M} buttonType={"primary"}>
          View More
        </Button>
      </Flex>
    </Flex>
  );
}
