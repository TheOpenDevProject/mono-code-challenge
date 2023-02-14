import { PreloadedQuery, usePreloadedQuery } from "react-relay";
import RequestAdvertisementProductsQueryGraphql, {
  RequestAdvertisementProductsQuery,
} from "../../../graphql/__generated__/RequestAdvertisementProductsQuery.graphql";
import { CartProduct } from "./CartProduct";
import React, { Dispatch } from "react";
import { ICartAction } from "../hooks/useCart";
import RequestAdvertisementRulesQueryGraphql, {
  RequestAdvertisementRulesQuery,
} from "../../../graphql/__generated__/RequestAdvertisementRulesQuery.graphql";

interface IProductListProps {
  queryRef: PreloadedQuery<RequestAdvertisementProductsQuery>;

  dispatchCartEvent: Dispatch<ICartAction>;

  rulesQueryRef: PreloadedQuery<RequestAdvertisementRulesQuery>;
}

export function ProductList(props: IProductListProps) {
  const { queryRef, dispatchCartEvent, rulesQueryRef } = props;

  const data = usePreloadedQuery<RequestAdvertisementProductsQuery>(
    RequestAdvertisementProductsQueryGraphql,
    queryRef
  );

  const rules = usePreloadedQuery<RequestAdvertisementRulesQuery>(
    RequestAdvertisementRulesQueryGraphql,
    props.rulesQueryRef
  );

  if (!dispatchCartEvent) return <>Loading...</>;

  return (
    <>
      {data.advertisements.map((advertisement) => (
        <CartProduct
          rules={rules.pricingRules}
          product={advertisement}
          onClick={dispatchCartEvent}
        />
      ))}
    </>
  );
}
