import AuthenticationContext from "../contexts/AuthenticationContext";
import { useLogin } from "../hooks/useLogin";
import { useEffect } from "react";
import { useIsAuthenticated } from "../hooks/useIsAuthenticated";

export interface IAuthenticationProvider {
  children: React.ReactNode;
  options: {
    successUrl: string;
    failureUrl: string;
  };
}

const AuthenticationProvider = (props: IAuthenticationProvider) => {
  const { children, options } = props;

  const { requestAccessToken, loading } = useLogin();
  const {
    isAuthenticated,
    checkActiveUser,
    profile,
    loading: profileCheckLoading,
  } = useIsAuthenticated(options.successUrl, options.failureUrl);

  useEffect(() => {
    if (!loading) {
      checkActiveUser();
    }
  }, [loading, checkActiveUser]);

  const logout = async () => {};
  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated,
        login: requestAccessToken,
        logout,
        loading: loading || profileCheckLoading,
        profile,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};

export default AuthenticationProvider;
