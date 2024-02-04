import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div>
      <h1>your cart items will come here</h1>
      {cart.length === 0 && <h1>pls add items to the cart</h1>}
      {cart.map((data) => {
        return (
          <div key={data.id}>
            <img src={data.thumbnail} alt="" />
            <h5>{data.title}</h5>
            <h3>price {data.price}</h3>
          </div>
        );
      })}
      <h1>Total {cart.reduce((total, data) => (total += data.price), 0)}</h1>;
    </div>
  );
};

export default Cart;
