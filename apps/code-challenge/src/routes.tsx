import { Navigate, RouteObject } from "react-router-dom";

import { BaseLayout } from "./views/layouts/BaseLayout";
import React from "react";
import { ProductsView } from "./views/cart/products.view";

const redirectOrNavigate = (isAuthenticated: boolean) => {
  if (!isAuthenticated) {
    return <BaseLayout />;
  }

  return <Navigate to="/authentication/login" />;
};

// @ts-ignore
export const routes = (isAuthenticated: boolean): RouteObject[] => [
  {
    path: "/app",
    element: redirectOrNavigate(isAuthenticated),
    children: [
      { path: "/app/products", element: <ProductsView /> },
      { path: "*", element: <>404 Not Found</> },
    ],
  },
  {
    path: "/",
    element: isAuthenticated ? (
      <Navigate to={"/app/products"} />
    ) : (
      <Navigate to={"/authentication/login"} />
    ),
  },
];
