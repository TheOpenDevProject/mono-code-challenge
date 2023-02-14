import React from "react";
import "./App.css";
import { useRoutes } from "react-router-dom";
import { routes } from "./routes";
import { useAuthenticationContext } from "./hooks/useAuthenticationContext";

function App() {
  const { isAuthenticated } = useAuthenticationContext();

  const renderable = useRoutes(
    routes(isAuthenticated)
  );
  return <>{renderable}</>;
}

export default App;
