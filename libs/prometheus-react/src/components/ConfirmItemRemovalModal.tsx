import { Button, ButtonSize, Flex, Text } from "@scylla-digital/design-library";

import React from "react";
import { WarningRounded } from "@material-ui/icons";

export interface ConfirmItemRemovalModalProps {
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmItemRemovalModal(props: ConfirmItemRemovalModalProps) {
  const { onConfirm, onCancel } = props;
  return (
    <Flex flexDirection={"column"} flexGap={"1rem"} flexStyles={{ padding: "1rem" }}>
      <Text>I understand that this is final and that this item can not be recovered.</Text>
      <Flex justifyContent={"flex-end"} flexGap={"1rem"}>
        <Flex alignItems={"center"} justifyContent={"flex-start"} flexGrow={1}>
          <WarningRounded /> Warning!
        </Flex>
        <Button buttonSize={ButtonSize.M} buttonType={"primary"} onClick={onConfirm}>
          I understand
        </Button>
        <Button buttonSize={ButtonSize.M} buttonType={"danger"} onClick={onCancel}>
          Cancel
        </Button>
      </Flex>
    </Flex>
  );
}
