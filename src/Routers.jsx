import React from "react";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Shop from "./Components/shop/Shop";
import Contact from "./Components/Contact-us";
import Cart from "./Components/Cart";
import IT from "./Components/Blog/IT";
import AI from "./Components/Blog/AI";
import Login from './Components/Login'
import Layout from "./Components/Layout";


const Routers = createBrowserRouter(
  [
    {
      path: '/' ,
      element : <Layout/>
    },
    {
      path: '/blog' ,
      element: <Blog/> ,
      children: [
        {
          path: 'it-news',
          element: <IT/>
        } ,
        {
          path: 'ai-news',
          element: <AI/>
        } 
      ]
    },
    {
      path: '/login' ,
      element: <Login/>
    }
  ]
)

export default Routers;
