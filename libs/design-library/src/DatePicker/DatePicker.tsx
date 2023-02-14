import { useRef, useState } from "react";
import { Calendar } from "react-date-range";
import { Input } from "../Input";
import styled from "styled-components";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file

interface IDatePickerContainer {
  offsetY: number;
  showPicker: boolean;
}

export const DatePickerContainer = styled.div<IDatePickerContainer>`
  position: absolute;
  z-index: 2;
  top: ${(props) => props.offsetY}px;

  opacity: ${(props) => (props.showPicker ? 0 : 1)};
  transition: opacity linear 0.2s;
`;

export function DatePicker({ onChange }: { onChange: (changeProps: unknown) => void }) {
  const [showPicker, setShowPicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date>();
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <>
      <Input
        value={selectedDate ? selectedDate.toDateString() : ""}
        type={"text"}
        onClick={() => setShowPicker(!showPicker)}
        ref={inputRef}
        onBlur={() => setShowPicker(!showPicker)}
      />
      {inputRef && inputRef.current && (
        <DatePickerContainer offsetY={inputRef.current.offsetHeight} showPicker={showPicker}>
          <Calendar
            date={new Date()}
            onChange={(changeProps: unknown) => {
              setSelectedDate(changeProps as Date);
              onChange(changeProps);
            }}
          />
        </DatePickerContainer>
      )}
    </>
  );
}
