import { createContext } from "react";

export interface IAuthenticationContext {
  isAuthenticated: boolean;
  loading: boolean;
  profile?: any;

  login(username: string, password: string): Promise<any>;

  logout(): Promise<void>;
}

const AuthenticationContext: React.Context<IAuthenticationContext | undefined> =
  createContext<IAuthenticationContext | undefined>(undefined);

export default AuthenticationContext;
