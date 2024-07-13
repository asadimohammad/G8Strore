import React from "react";
import Cart from "../Cart";

const Product = (props) => {
  let { product, setCartArray } = props
  return (
    <div className="product">
      <div className="img">IMG</div>
      <div className="h3">Title: {product.title}</div>
      <p>price: {product.price}</p>
      <button onClick={() => setCartArray(product)}>Add To Cart</button>
    </div>
  );
};

export default Product;
