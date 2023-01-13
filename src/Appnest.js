import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link , createBrowserRouter} from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import Afterlogin from './pages/Afterlogin'

import Home from "./pages/Home";
import UserList from './pages/UserList';
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import NewProduct from "./pages/NewProduct";
function App() {
 return (

    createBrowserRouter([
        {
          path: "/",
          element: <Root />,
          children: [
            {
              path: "contact",
              element: <Contact />,
            },
            {
              path: "dashboard",
              element: <Dashboard />,
              loader: ({ request }) =>
                fetch("/api/dashboard.json", {
                  signal: request.signal,
                }),
            },
            {
              element: <AuthLayout />,
              children: [
                {
                  path: "login",
                  element: <Login />,
                  loader: redirectIfUser,
                },
                {
                  path: "logout",
                  action: logoutUser,
                },
              ],
            },
          ],
        },
      ])

    );
}

export default App;