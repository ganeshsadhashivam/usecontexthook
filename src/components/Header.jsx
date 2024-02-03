import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "..";

const Header = () => {
  const { items } = useContext(CartContext);
  return (
    <div style={{ textAlign: "center", margin: "1rem", padding: "1rem" }}>
      <h1>Your Cart</h1>
      <h3>Items in your cart {items}</h3>
      <NavLink to="/">home</NavLink>
      ||
      <NavLink to="/cart">cart</NavLink>
    </div>
  );
};

export default Header;
