import React, { useState } from "react";
import Header from "./Header";
import Shop from "./shop/Shop";
import "../assets/styles/main.css";
import Cart from "./Cart";
import { Routes , Route} from "react-router-dom";
import Blog from "./Blog";
import Contact from "./Contact-us";
import Routers from "../Routers";

const Layout = () => {
  const [showCart, setShowCart] = useState(false);
   let [cartArray , setCartArray] = useState([])

   const addProduct = (pr) => {
    cartArray.push(pr)
   }

  return (
    <>
      <Header setShowCart={setShowCart} />
      <h2>HHHHH</h2>
      {/* {showCart ? <Cart cartArray={cartArray}/> : <Shop setCartArray={addProduct} />} */}
    </>
  );
};

export default Layout;
