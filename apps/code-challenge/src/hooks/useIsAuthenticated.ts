import { useCallback, useState } from "react";
import { createOperationDescriptor, getRequest } from "relay-runtime";
import relayEnvironment from "../helpers/RelayEnvironment";
import { RequestActiveUserQuery } from "../graphql/RequestActiveUserQuery";
import { useLocation, useNavigate } from "react-router-dom";

export function useIsAuthenticated(successUrl: string, failureUrl: string) {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [profile, setProfile] = useState(undefined);
  const [loading, setLoading] = useState(false);
  // Fire off a query to check if the user is authenticated.
  // The server will either throw an error or return the active users profile
  const checkActiveUser = useCallback(async () => {
    const fetchUserProfile = async () => {
      const authenticationUserQuery = getRequest(RequestActiveUserQuery);
      const operation = createOperationDescriptor(authenticationUserQuery, {});
      // Profile already loaded into memory
      if (profile) {
        return;
      }

      try {
        setLoading(true);
        const result = (await relayEnvironment
          .execute({ operation })
          .toPromise()) as { data: { whoAmI: any } };

        const { whoAmI } = result.data;

        if (whoAmI) {
          setLoading(false);
          setIsAuthenticated(true);
          setProfile(whoAmI);
        }
      } catch (e) {
        setLoading(false);
        setIsAuthenticated(false);
        if (pathname.includes("/authentication/")) {
          return;
        }
        navigate(failureUrl);
      }
    };

    fetchUserProfile();
  }, [successUrl, failureUrl]);

  return { isAuthenticated, checkActiveUser, profile, loading };
}
