import React from "react";
import Home from "./components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import { Children } from "react";
import About from "./components/About/About";
import Cart from "./components/Cart/Cart";
import Products from "./components/Products/Products";
import Brands from "./components/Brands/Brands";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Notfound from "./components/Notfound/Notfound";
import Categories from "./components/Categories/Categories";
let router = createBrowserRouter([
  {
    path: "",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "categories", element: <Categories /> },
      { path: "cart", element: <Cart /> },
      { path: "brands", element: <Brands /> },
      { path: "login", element: <Login /> },
      { path: "register", element: <Register /> },
      { path: "*", element: <Notfound /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={router}></RouterProvider>
}
