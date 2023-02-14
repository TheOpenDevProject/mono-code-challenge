import { BasketItem } from "./BasketItem";
import { Button, ButtonSize, Flex, Text } from "@scylla-digital/design-library";
import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import RequestAdvertisementRulesQueryGraphql, {
  RequestAdvertisementRulesQuery,
} from "../../../graphql/__generated__/RequestAdvertisementRulesQuery.graphql";
import {
  Advertisement,
  ICartAction,
  PricingRule,
  useCart,
} from "../hooks/useCart";
import { Dispatch } from "react";

export interface IBasketProps {
  items: Map<string, Array<Advertisement>>;
  freeItems: Map<string, Array<Advertisement>>;

  totalItems: number;

  basketTotal: number;

  dispatchCartEvent: Dispatch<ICartAction>;

  rulesQueryRef: PreloadedQuery<RequestAdvertisementRulesQuery>;
}

function generateCartItems(
  items: Map<string, Array<Advertisement>>,
  freeItems: Map<string, Array<Advertisement>>,
  updateCartDispatcher: Dispatch<ICartAction>,
  rules: Readonly<PricingRule[]>
) {
  const cartItems = [];
  for (const [key, value] of items) {
    console.log(value);

    const freeAvailableItems = freeItems.get(key);

    cartItems.push(
      <BasketItem
        key={key}
        count={value.length}
        itemMetadata={value[0]}
        freeItems={freeAvailableItems ? freeAvailableItems.length : 0}
        onItemRemove={() =>
          updateCartDispatcher({
            type: "REMOVE_ITEM",
            advertisement_type: key,
            rules,
          })
        }
      />
    );
  }
  return cartItems;
}

export function Basket(props: IBasketProps) {
  const {
    items,
    freeItems,
    totalItems,
    basketTotal,
    dispatchCartEvent,
    rulesQueryRef,
  } = props;

  const rules = usePreloadedQuery<RequestAdvertisementRulesQuery>(
    RequestAdvertisementRulesQueryGraphql,
    rulesQueryRef
  );

  return (
    <Flex flexDirection={"column"} flexGap={"1rem"} flexGrow={1}>
      <Flex flexDirection={"column"} flexGap={"1rem"} flexGrow={1}>
        {items &&
          generateCartItems(
            items,
            freeItems,
            dispatchCartEvent,
            rules.pricingRules
          )}
      </Flex>
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Text fontSize={"24px"}>
          <>Total: ${basketTotal}</>
        </Text>
        <Text fontSize={"24px"}>
          <>Items: {totalItems}</>
        </Text>
        <Button buttonType={"primary"} buttonSize={ButtonSize.L}>
          Checkout
        </Button>
      </Flex>
    </Flex>
  );
}
