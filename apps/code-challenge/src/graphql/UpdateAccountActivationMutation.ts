import { graphql } from "babel-plugin-relay/macro";

export const UpdateAccountActivationMutation = graphql`
  mutation UpdateAccountActivationMutation($input: ActivateUserInput!) {
    activateUser(input: $input) {
      email
    }
  }
`;
