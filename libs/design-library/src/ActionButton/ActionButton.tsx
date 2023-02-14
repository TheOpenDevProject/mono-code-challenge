import { ChangeEvent, createRef } from "react";
import styled, { css } from "styled-components";
import { Text } from "../Text";
import { Flex } from "../Flex";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { SvgIconTypeMap } from "@mui/material";

interface ActionButtonContainerProps {
  disabled?: boolean;
}

const ActionButtonContainer = styled.div<ActionButtonContainerProps>`
  background: #ffffff;
  ${(props) =>
    !props.disabled
      ? css`
          opacity: 1;
        `
      : css`
          opacity: 0.3;
        `}
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  ${(props) =>
    !props.disabled
      ? css`
          box-shadow: 0 3px 6px rgb(0 0 0 / 3%), 0 3px 6px rgb(0 0 0 / 0%);
        `
      : css`
          box-shadow: none;
        `}
  width: 3em;
  height: 3em;

  ${(props) =>
    !props.disabled
      ? css`
          cursor: pointer;
        `
      : css`
          cursor: not-allowed;
        `}
  &:hover {
    ${(props) =>
      !props.disabled
        ? css`
            box-shadow: 0 3px 6px rgb(0 0 0 / 12%), 0 3px 6px rgb(0 0 0 / 0%);
          `
        : css`
            box-shadow: none;
          `}
  }

  &:active {
    box-shadow: 0 3px 6px rgb(0 0 0 / 0%), 0 3px 6px rgb(0 0 0 / 0%);
  }
`;

interface ActionButtonProps {
  onClick: () => void;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  text: string;
  disabled?: boolean;
}

interface ActionUploadButtonProps {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  Icon: OverridableComponent<SvgIconTypeMap<unknown, "svg">>;
  text: string;
  disabled?: boolean;
}

export function ActionButton(props: ActionButtonProps) {
  const { onClick, Icon, text, disabled } = props;
  return (
    <Flex flexGap={"1rem"} alignItems={"center"} onClick={onClick}>
      <ActionButtonContainer disabled={disabled}>
        <Icon fontSize={"medium"} />
      </ActionButtonContainer>
      <Text>{text}</Text>
    </Flex>
  );
}

export function ActionUploadButton(props: ActionUploadButtonProps) {
  const { Icon, text, disabled, onChange } = props;
  const inputRef = createRef<HTMLInputElement>();

  const handleClick = () => {
    if (!inputRef.current) return;
    inputRef.current.click();
  };

  return (
    <Flex flexGap={"1rem"} alignItems={"center"}>
      <ActionButtonContainer disabled={disabled} onClick={handleClick}>
        <Icon fontSize={"medium"} />
        <input type={"file"} hidden ref={inputRef} onChange={(e) => onChange(e)} />
      </ActionButtonContainer>
      <Text>{text}</Text>
    </Flex>
  );
}
