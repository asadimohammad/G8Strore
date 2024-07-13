import React, { useState } from "react";

const Cart = ({ cartArray }) => {
  return (
    <div>
      {cartArray.length === 0 ? <h2>سبد خرید شما خالی است</h2> : ""}
      {cartArray.map((item , index) => (
        <div className="product" key={index}>
          <div className="h3">Title: {item.title}</div>
          <p>price: {item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Cart;
