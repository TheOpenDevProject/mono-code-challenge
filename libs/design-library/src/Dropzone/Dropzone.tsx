import React from "react";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { AddRounded } from "@mui/icons-material";
import { Flex } from "../Flex";
import { Text } from "../Text";

export interface GetColorProps {
  isDragAccept: boolean;
  isDragReject: boolean;
  isDragActive: boolean;
}

const getColor = (props: GetColorProps) => {
  if (props.isDragAccept) {
    return "#00e676";
  }
  if (props.isDragReject) {
    return "#ff1744";
  }
  if (props.isDragActive) {
    return "#2196f3";
  }
  return "#eeeeee";
};

const Container = styled.div<GetColorProps>`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${(props) => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #bdbdbd;
  outline: none;
  transition: border 0.24s ease-in-out;
`;

export function DropzoneUploader() {
  const { getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject } = useDropzone({ accept: "image/*" });
  return (
    <div className="container">
      <Container {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <Flex flexDirection={"column"} justifyContent={"center"} alignItems={"center"} flexGap={"1rem"} flexStyles={{ padding: "0rem 0.5rem" }}>
          <AddRounded />
          <Text>Upload</Text>
        </Flex>
      </Container>
    </div>
  );
}
