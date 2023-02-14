import { Button, ButtonSize, Flex, Text } from "@scylla-digital/design-library";

export interface IBasketProps {
  count: number;

  freeItems: number;

  itemMetadata: {
    name: string;
    description: string;
    standardPrice: number;
  };

  onItemRemove: () => void;
}

export function BasketItem(props: IBasketProps) {
  const { count, itemMetadata, freeItems, onItemRemove } = props;
  return (
    <Flex>
      <Flex flexDirection={"column"} flexGrow={1}>
        <Text>{itemMetadata.name}</Text>
        <Text>{itemMetadata.description}</Text>
        <Text>
          <>{itemMetadata.standardPrice}</>
        </Text>
      </Flex>
      <Flex alignItems={"center"} flexGap={"1rem"}>
        <Text>Quantity</Text>
        <input type="number" value={count} />

        <Text>Free Advertisements</Text>
        <input disabled type="number" value={freeItems} />

        <Button
          buttonType={"danger"}
          buttonSize={ButtonSize.S}
          onClick={onItemRemove}
        >
          X
        </Button>
      </Flex>
    </Flex>
  );
}
