import { createBrowserRouter } from "react-router-dom";
import { HomePage as Home } from "../pages/home";
import { LoginPage as Login } from "../pages/login";
import { OrderPage as Order } from "../pages/order";
import { NotFoundPage as NotFound } from "../pages/not-found";
import { AccountPage as Account } from "../pages/account";
import { CategoriesPage  as Categories , loader as categoriesLoader} from "../pages/categories";
import {CartPage as Cart} from "../pages/cart";
import { Layout } from "../layouts/Layout";
import { ProductDetailPage as ProductDetail  , loader as productDetailLoader} from "../pages/product-detail";

export const router = createBrowserRouter([

  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index:true,
        element: <Home />,
      },
      {
        path: "/order",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/account",
        element: <Account />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/categories/:categoryName",
        element: <Categories />,
        loader: categoriesLoader
      },{
        path: "/product/:id",
        element: <ProductDetail />,
        loader: productDetailLoader
      }
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);
