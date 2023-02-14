import { GraphQLTaggedNode } from "react-relay";
import { graphql } from "relay-runtime";

export const RequestAdvertisementRules: GraphQLTaggedNode = graphql`
  query RequestAdvertisementRulesQuery($input: PricingRuleInput!) {
    pricingRules(input: $input) {
      id
      productId
      clientId
      freeItemMultiple
      freeItemMultiplier
      alternativePrice
    }
  }
`;
