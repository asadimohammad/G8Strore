import React from "react";
import { Link, NavLink } from "react-router-dom";

const Header = ({ setShowCart }) => {
  let fName = 'Mohammad Asadi'
  return (
    <header className="d-flex">
      <ul className="d-flex gap-6">
        <li>
          <NavLink to='/shop' state={{fName: fName}}>Shop</NavLink>
        </li>
        <li>
          <NavLink to='/blog'>Blog</NavLink>
        </li>
        <li>
          <NavLink to='/contact-us'>Contact</NavLink>
        </li>
      </ul>
      <div className="d-flex gap-6">
        <h1 onClick={() => setShowCart(false)}>Shop</h1>
        <h1 onClick={() => setShowCart(true)}>Cart</h1>
      </div>
    </header>
  );
};

export default Header;
