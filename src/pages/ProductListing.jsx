import React, { useContext } from "react";
import "./productlisting-module.css";
import Header from "../components/Header";
import { CartContext } from "../context/CartContext.js";

const ProductListing = ({ products }) => {
  // const { cartLogger } = useContext(CartContext);

  const { handleCartUpdate } = useContext(CartContext);
  return (
    <>
      <Header />
      <div className="product-layout">
        {products.map((item) => {
          const { id, title, thumbnail } = item;
          return (
            <div className="product-border" key={id}>
              <img src={thumbnail} alt="" />
              <h5>{title}</h5>
              <button className="button" onClick={() => handleCartUpdate(item)}>
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListing;
