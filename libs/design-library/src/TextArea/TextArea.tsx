import styled from "styled-components";
import { ChangeEvent, useEffect, useState } from "react";
import { Flex } from "../Flex";
import { Text } from "../Text";

export const TextAreaWrapper = styled.div`
  textarea {
    background: #f4f4f4;
    min-width: 400px;
    min-height: 100px;
    outline: none;
    border: none;
    padding: 1rem;
    border-radius: 0.5rem;
  }
`;

export const TextAreaCounter = styled(Text)`
  background: #f4f4f4;
  border-radius: 0.5rem;
  padding: 0.15rem 1rem;
`;

export interface TextAreaProps {
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  defaultValue?: string;
  label?: string;
}

export const TextArea = (props: TextAreaProps) => {
  const { onChange, label, defaultValue } = props;
  const [value, setValue] = useState<string>(defaultValue || "");
  const [, setCount] = useState<number>(0);

  useEffect(() => setCount(value.length), [value]);

  return (
    <TextAreaWrapper>
      <Flex flexDirection={"column"} flexGap={"20px"}>
        {label && <Text>{label}</Text>}
        <Flex>
          <textarea
            value={value}
            onChange={(e) => {
              if (onChange) {
                onChange(e);
              }

              setValue(e.target.value);
            }}
          />
        </Flex>
        <Flex></Flex>
      </Flex>
    </TextAreaWrapper>
  );
};
