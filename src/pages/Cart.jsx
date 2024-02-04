import React, { useContext } from "react";
import "./cart-module.css";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart } = useContext(CartContext);
  return (
    <div className="cart">
      <h1>your cart items will come here</h1>
      <div>
        {cart.length === 0 && <h1>pls add items to the cart</h1>}
        {cart.map((data) => {
          return (
            <div className="cart-layout" key={data.id}>
              <div>
                <img src={data.thumbnail} alt="" />
              </div>
              <div>
                <h2>{data.brand}</h2>
                <h5>{data.title}</h5>

                <h3>price {data.price}</h3>
                <p>{data.description}</p>
              </div>
            </div>
          );
        })}
        <h1>Total {cart.reduce((total, data) => (total += data.price), 0)}</h1>
      </div>
    </div>
  );
};

export default Cart;
