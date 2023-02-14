import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import { RelayEnvironmentProvider } from "react-relay";
import RelayEnvironment from "./helpers/RelayEnvironment";
import AuthenticationProvider from "./providers/AuthenticationProvider";

ReactDOM.render(
  // <React.StrictMode>
  <RelayEnvironmentProvider environment={RelayEnvironment}>
    <Router>
      <Suspense fallback={<>Loading...</>}>
        <AuthenticationProvider
          options={{
            successUrl: "/app/products",
            failureUrl: "/app/products", // HACK HACK HACK: This hack is to prevent the app from redirecting due to authentication / api failure in this demo app
          }}
        >
          <App />
        </AuthenticationProvider>
      </Suspense>
    </Router>
  </RelayEnvironmentProvider>,
  // </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
