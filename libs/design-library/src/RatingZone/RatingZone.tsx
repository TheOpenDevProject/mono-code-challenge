import { Flex } from "../Flex";
import { RatingZoneOption } from "./RatingZoneOption";
import { useEffect, useMemo } from "react";
import { useRatingZoneContext } from "./hooks/useRatingZoneContext";
import { Text } from "../Text";

export interface IRatingZone {
  onChange: (value: number | undefined) => void;
  label?: string;
  description?: string;
  max?: number;
}

const generateRatingZoneOptions = (options: string[], clickHandler: (rating: number) => void) => {
  return options.map((label, index) => {
    return <RatingZoneOption key={index} value={index} label={label} onClick={clickHandler} />;
  });
};

export const RatingZone = (props: IRatingZone) => {
  const { onChange, label, description, max } = props;
  const { rating, setRating } = useRatingZoneContext();

  const zoneOptions = useMemo<string[]>(() => {
    const options = [];

    if (!max) {
      return ["1", "2", "3", "4", "5"];
    }

    // Very odd bug here that max sometimes comes in as a string
    // which makes no sense, but as a workaround we can cast it
    const maxNum: number = +max;

    for (let i = 0; i < maxNum + 1; i++) {
      options.push(`${i}`);
    }

    return options;
  }, [max]);

  useEffect(() => {
    onChange(rating);
  }, [rating]);
  return (
    <Flex flexDirection={"column"} flexGap={"0.7rem"} flexGrow={1}>
      {label && <Text>{label}</Text>}
      {description && <Text>{description}</Text>}
      <Flex justifyContent={"space-between"}>{generateRatingZoneOptions(zoneOptions, setRating)}</Flex>
    </Flex>
  );
};
