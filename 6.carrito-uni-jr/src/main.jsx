import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import ProductsContextProvider from "./context/ProductsContextProvider";
import CartContextProvider from "./context/CartContextProvide";
import OrderContextProvider from "./context/OrderContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ProductsContextProvider>
      <CartContextProvider>
        <OrderContextProvider>
          <RouterProvider router={router} />
        </OrderContextProvider>
      </CartContextProvider>
    </ProductsContextProvider>
  </React.StrictMode>
);
