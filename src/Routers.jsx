import React from "react";
import { Route, Routes } from "react-router-dom";
import Blog from "./Components/Blog";
import Shop from "./Components/shop/Shop";
import Contact from "./Components/Contact-us";
import Cart from "./Components/Cart";
import IT from "./Components/Blog/IT";
import AI from "./Components/Blog/AI";
import Login from './Components/Login'

const Routers = () => {
  return (
    <Routes>
      <Route path="/blog" element={<Blog />}>
        <Route path="it-news" element={<IT/>}/>
        <Route path="ai-news" element={<AI/>}/>
      </Route>
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Routers;
