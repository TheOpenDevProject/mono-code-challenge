import React, { useEffect } from "react";
import { Flex, Grid, GridItem, Text } from "@scylla-digital/design-library";
import { useQueryLoader } from "react-relay";
import RequestAdvertisementProductsQueryGraphql, {
  RequestAdvertisementProductsQuery,
} from "../../graphql/__generated__/RequestAdvertisementProductsQuery.graphql";
import { ProductList } from "./components/ProductList";
import Select from "react-select";
import { CompanySelector } from "./components/CompanySelector";
import { Basket } from "./components/Basket";
import RequestAdvertisementRulesQueryGraphql, {
  RequestAdvertisementRulesQuery,
} from "../../graphql/__generated__/RequestAdvertisementRulesQuery.graphql";
import { useCart } from "./hooks/useCart";
export function ProductsView() {
  const [cartState, dispatchCartEvent] = useCart();

  const [activeCompany, setActiveCompany] = React.useState<string | undefined>(
    undefined
  );

  const [adQueryRef, loadAdvertisements] =
    useQueryLoader<RequestAdvertisementProductsQuery>(
      RequestAdvertisementProductsQueryGraphql
    );

  const [rulesQueryRef, loadRules] =
    useQueryLoader<RequestAdvertisementRulesQuery>(
      RequestAdvertisementRulesQueryGraphql
    );

  useEffect(() => {
    if (!activeCompany) return;

    loadAdvertisements({});
    loadRules({
      input: { clientId: activeCompany },
    });
  }, [loadAdvertisements, activeCompany]);

  if (!activeCompany) {
    return (
      <Flex
        justifyContent={"center"}
        alignItems={"center"}
        flexStyles={{ height: "100%" }}
      >
        <CompanySelector onChange={setActiveCompany} value={activeCompany} />
      </Flex>
    );
  }

  return (
    <Grid columns={2} rows={3} fullHeight gridStyles={{ padding: "1rem" }}>
      <GridItem startRow={1} endRow={1} startColumn={2} endColumn={2}>
        <Flex
          flexGrow={1}
          alignItems={"center"}
          flexGap={"1rem"}
          justifyContent={"flex-end"}
        >
          <CompanySelector onChange={setActiveCompany} value={activeCompany} />
        </Flex>
      </GridItem>

      <GridItem startRow={2} endRow={3} startColumn={1} endColumn={3}>
        <Flex
          alignItems={"center"}
          flexGap={"2rem"}
          flexStyles={{ height: "100%" }}
        >
          <Flex flexGap={"1rem"} flexDirection={"column"}>
            {adQueryRef && rulesQueryRef ? (
              <ProductList
                queryRef={adQueryRef}
                dispatchCartEvent={dispatchCartEvent}
                rulesQueryRef={rulesQueryRef}
              />
            ) : (
              <>Loading...</>
            )}
          </Flex>
          <Flex
            flexGrow={1}
            flexStyles={{
              border: "solid 1px #ccc",
              borderRadius: "6px",
              padding: "1rem",
              height: "100%",
            }}
          >
            {rulesQueryRef ? (
              <Basket
                items={cartState === undefined ? new Map() : cartState.items}
                freeItems={cartState.freeItems}
                totalItems={cartState.totalItems}
                basketTotal={cartState.totalCost}
                dispatchCartEvent={dispatchCartEvent}
                rulesQueryRef={rulesQueryRef}
              />
            ) : (
              <>Loading...</>
            )}
          </Flex>
        </Flex>
      </GridItem>
    </Grid>
  );
}
