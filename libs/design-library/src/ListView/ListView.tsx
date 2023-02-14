import { Flex } from "../Flex";
import styled from "styled-components";
import { ReactElement } from "react";

const ListViewContainer = styled(Flex)`
  border: 1px solid #ccc;
`;

export function ListView({ children }: { children: ReactElement[] | ReactElement }) {
  return <ListViewContainer flexDirection={"column"}>{children}</ListViewContainer>;
}
