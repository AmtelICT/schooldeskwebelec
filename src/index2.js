import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

import Afterlogin from "./pages/Afterlogin";
import App from './App';
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
import Home from "./pages/Home";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/home",
    element: <Afterlogin/>,
    children: [
        {
          path: "dashboard",
          element: <Home />,
        },

        {
            path: "users",
            element: <UserList />,
          },

          {
            path: "user/:userId",
            element: <User />,
          },
          
          {
            path: "newUser",
            element: <NewUser />,
          },

          {
            path: "products",
            element: <ProductList/>,
          },

          {
            path: "product/:productId",
            element: <Product />,
          },

          {
            path: "newproduct",
            element: <NewProduct />,
          }
        ]

          
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);