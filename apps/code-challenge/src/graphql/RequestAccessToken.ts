import { GraphQLTaggedNode } from "react-relay";
import { graphql } from "babel-plugin-relay/macro";

export const RequestAccessTokenQuery: GraphQLTaggedNode = graphql`
  query RequestAccessTokenQuery($input: AuthenticateUserInput!) {
    requestAccessToken(input: $input)
  }
`;
