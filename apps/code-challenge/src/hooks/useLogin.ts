import { useCallback, useState } from "react";
import { RequestAccessTokenQuery } from "../graphql/RequestAccessToken";
import { createOperationDescriptor, getRequest } from "relay-runtime";
import relayEnvironment from "../helpers/RelayEnvironment";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const requestAccessToken = useCallback(
    async (email: string, password: string) => {
      if (loading) {
        return;
      }
      setLoading(true);
      const authenticationQueryRequest = getRequest(RequestAccessTokenQuery);
      const operation = createOperationDescriptor(authenticationQueryRequest, {
        input: { email, password },
      });
      const result = (await relayEnvironment
        .execute({ operation })
        .toPromise()) as {
        data: { requestAccessToken: string };
      };
      if (!result) {
        return;
      }
      // This means the request is truly completed
      if (!result.data.requestAccessToken) {
        return;
      }

      if (result.data.requestAccessToken === "LOGIN_FAILURE") {
        setLoading(false);

        navigate("/authentication/login?error=LOGIN_FAILURE");
      }

      if (result.data.requestAccessToken === "ACTIVATION_FAILURE") {
        setLoading(false);
        navigate("/authentication/login?error=LOGIN_FAILURE");
      }

      setLoading(false);
    },
    [loading, navigate]
  );

  return { requestAccessToken, loading };
}
