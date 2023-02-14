import RatingZoneProvider from "./RatingZoneProvider";
import { RatingZone } from "./RatingZone";
import styled from "styled-components";

export interface IRatingZoneHOC {
  onChange: (value: number | undefined) => void;
  label?: string;
  description?: string;
  max?: number;
}

const FlexForm = styled.form`
  display: flex;
  flex: 1 auto;
`;

export const RatingZoneHOC = (props: IRatingZoneHOC) => {
  const { onChange, label, description, max } = props;
  return (
    <RatingZoneProvider>
      <FlexForm>
        <RatingZone onChange={onChange} label={label} description={description} max={max} />
      </FlexForm>
    </RatingZoneProvider>
  );
};
