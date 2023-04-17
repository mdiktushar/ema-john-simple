import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/Layout/Home/Home";
import Shop from "./components/shop/shop";
import Orders from "./components/Orders/Orders";
import Inventory from "./components/Inventory/Inventory";
import Login from "./components/Auth/Login/Login";
import cartProductsLoader from "./utilities/loader";
import SignUp from "./components/Auth/SignUp/SignUp";
import { AuthProvider } from "./components/Providers/AuthProvider";
import Checkout from "./components/Checkout/Checkout";
import PrivateRoutes from "./routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: `/`,
    element: <Home />,
    children: [
      {
        path: `/`,
        element: <Shop />,
      },
      {
        path: `/orders`,
        element: <Orders />,
        loader: cartProductsLoader,
      },
      {
        path: `/checkout`,
        element: (
          <PrivateRoutes>
            <Checkout />
          </PrivateRoutes>
        ),
        loader: cartProductsLoader,
      },
      {
        path: `/inventory`,
        element: (
          <PrivateRoutes>
            <Inventory />
          </PrivateRoutes>
        ),
      },
      {
        path: `/login`,
        element: <Login />,
      },
      {
        path: `/signUp`,
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
