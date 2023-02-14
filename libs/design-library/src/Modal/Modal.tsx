import React from "react";
import styled from "styled-components";
import { Flex, IFlexStyles } from "../Flex";
import { Text } from "../Text";

const ModalWrapper = styled.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContentsWrapper = styled.div`
  border-radius: 6px;
  background: #ffffff;
  color: #1d1e22;
  display: flex;
  flex-direction: column;
`;

const modalTitleStyles: IFlexStyles = {
  background: "#4D4D4D",
  paddingTop: "1rem",
  paddingBottom: "1rem",
  paddingLeft: "2rem",
  borderRadius: "4px 4px 0 0",
};

const modalContentStyles: IFlexStyles = {};

export function Modal({ children, onClose, title }: { children: React.ReactNode; onClose: () => void; title: string }) {
  return (
    <ModalWrapper onClick={onClose}>
      <ModalContentsWrapper
        onClick={(ev) => {
          ev.preventDefault();
          ev.stopPropagation();
        }}
      >
        <Flex flexStyles={modalTitleStyles}>
          <Text fontStyles={{ color: "#fff" }}>{title}</Text>
        </Flex>
        <Flex flexStyles={modalContentStyles}>{children}</Flex>
      </ModalContentsWrapper>
    </ModalWrapper>
  );
}
