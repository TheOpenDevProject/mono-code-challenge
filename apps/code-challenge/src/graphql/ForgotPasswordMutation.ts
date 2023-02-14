import { graphql } from "babel-plugin-relay/macro";

export const ForgotPasswordMutation = graphql`
  mutation ForgotPasswordMutation($email: String!) {
    resetPassword(email: $email)
  }
`;
