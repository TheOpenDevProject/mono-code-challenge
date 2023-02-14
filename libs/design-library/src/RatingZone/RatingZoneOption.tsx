import { Flex } from "../Flex";
import { Text } from "../Text";
import { useCallback } from "react";
import { useRatingZoneContext } from "./hooks/useRatingZoneContext";

export interface IRatingZoneOptions {
  label: string;
  onClick: (number: number) => void;
  value?: number;
}

export const RatingZoneOption = (props: IRatingZoneOptions) => {
  const { label, onClick, value } = props;
  const { rating } = useRatingZoneContext();
  const handleClick = useCallback(() => {
    if (typeof value !== "number") {
      return;
    }
    onClick(value);
  }, [onClick, value]);

  return (
    <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} flexGap={"1rem"}>
      <Flex>
        <input type="radio" name={`${label}-option`} checked={value === rating} onChange={handleClick} />
      </Flex>
      <Flex>
        <Text>{value === 0 ? "N/A" : label}</Text>
      </Flex>
    </Flex>
  );
};
