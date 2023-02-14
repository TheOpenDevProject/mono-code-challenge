import { graphql } from "relay-runtime";
import { GraphQLTaggedNode } from "react-relay";

export const RequestAdvertisementProducts: GraphQLTaggedNode = graphql`
  query RequestAdvertisementProductsQuery {
    advertisements {
      id
      name
      description
      standardPrice
    }
  }
`;
