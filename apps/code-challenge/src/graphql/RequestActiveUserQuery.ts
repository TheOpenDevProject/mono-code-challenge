import { GraphQLTaggedNode } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

export const RequestActiveUserQuery: GraphQLTaggedNode = graphql`
  query RequestActiveUserQuery {
    whoAmI {
      email
      firstName
      lastName
    }
  }
`;
