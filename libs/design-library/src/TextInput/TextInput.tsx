import React, { ChangeEvent, DetailedHTMLProps, ForwardedRef, forwardRef, InputHTMLAttributes, useEffect, useMemo, useState } from "react";
import { Flex, IFlexStyles } from "../Flex";
import { Text } from "../Text";
import styled from "styled-components";
import { EmailOutlined } from "@mui/icons-material";
import { ITextInput } from "./TextInput.types";

const flexContainerStyles: IFlexStyles = {
  background: "#fff",
  border: "1px solid #ccc",
  borderRadius: "6px",
  boxSizing: "border-box",
  flexGrow: "1",
};

const ValidationMessage = styled(Text)`
  color: #a8002d;
  padding: 0.5rem;
`;

const flexIconContainerStyles: IFlexStyles = {
  padding: "0 0.7rem",
  color: "#323232",
};

const InputLabel = styled.label`
  font-family: "Roboto", sans-serif;
  background: #fff;
  bottom: 2.8rem;
  position: absolute;
  display: inline-block;
  left: 1.25em;
  padding: 0 0.5em;
  z-index: 1;

  font-size: 13px;
  font-style: normal;
  font-weight: 300;
  letter-spacing: 0;
  text-align: center;
`;

const InputWrapper = styled.div`
  display: flex;
  flex: 1 auto;

  input[type="search"] {
    font-family: "Roboto", sans-serif;
    font-size: 12px;
    border: none;
    border-radius: 6px;
    padding: 1em 0.5em 1em 0;
    margin: 0;
    width: 100%;

    &:focus {
      outline: none;
    }
  }

  input[type="text"],
  input[type="password"],
  input[type="email"] {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    border: none;
    border-radius: 6px;
    padding: 1em 0.5em 1em 0;
    margin: 0;
    width: 100%;
    outline: none;
  }
`;

export const TextInput = forwardRef((props: ITextInput, ref?: ForwardedRef<HTMLInputElement>) => {
  const { onChange, label, Icon, value, validationMessage, onIsValid } = props;
  const [managedValue, setManagedValue] = useState(value);
  const [isValid, setIsValid] = useState(true);

  useEffect(() => {
    onChange && onChange(managedValue ?? "");
    onIsValid && onIsValid(isValid);
  }, [managedValue, isValid]);

  const sanitizeInputProps = useMemo((): Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "onChange"> => {
    const sanitizedProps = { ...props };
    delete sanitizedProps["displayMode"];
    delete sanitizedProps["itemName"];
    delete sanitizedProps["itemId"];
    delete sanitizedProps["validationMessage"];
    delete sanitizedProps["Icon"];
    delete sanitizedProps["styles"];
    return sanitizedProps;
  }, [props]);
  return (
    <Flex flex={"1 auto"} flexGrow={1} flexDirection={"column"}>
      <Flex flex={"1 auto"} flexGrow={1}>
        <InputWrapper>
          <InputLabel>{label}</InputLabel>
          <Flex flexDirection={"row"} flexStyles={flexContainerStyles}>
            <Flex alignItems="center" justifyContent={"center"} flexStyles={flexIconContainerStyles}>
              {Icon ? <Icon /> : <EmailOutlined />}
            </Flex>

            <input
              ref={ref}
              key={props.itemId}
              placeholder={"Placeholder Text"}
              autoComplete={"off"}
              onBlur={(e) => {
                const isTargetValid = e.target.checkValidity();
                setIsValid(isTargetValid);
                if (!isTargetValid) {
                  e.target.blur();
                }
              }}
              {...sanitizeInputProps}
              value={managedValue}
              onChange={(e: ChangeEvent<HTMLInputElement>) => {
                setManagedValue(e.target.value);
              }}
            />
          </Flex>
        </InputWrapper>
      </Flex>
      {validationMessage && !isValid && <ValidationMessage>{validationMessage}</ValidationMessage>}
    </Flex>
  );
});

export default TextInput;
