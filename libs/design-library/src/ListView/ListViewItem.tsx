import { Flex } from "../Flex";
import styled from "styled-components";
import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";
import { ArrowRightRounded } from "@mui/icons-material";

export const ListViewItemContainer = styled(Flex)`
  padding: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #f5f5f5;
  }
`;

interface IListViewItem {
  listItemTitle: string;
  onClick?: () => void;
  Icon?: OverridableComponent<SvgIconTypeMap<Record<string, never>, "svg">>;
}

export function ListViewItem(props: IListViewItem) {
  const { listItemTitle, onClick, Icon } = props;
  return (
    <ListViewItemContainer flexGap={"1.25rem"} onClick={onClick}>
      <Flex>{Icon && <Icon />}</Flex>
      <Flex flexShrink={1}>{listItemTitle}</Flex>
      <Flex justifyContent={"flex-end"} flexGrow={1}>
        <ArrowRightRounded />
      </Flex>
    </ListViewItemContainer>
  );
}
