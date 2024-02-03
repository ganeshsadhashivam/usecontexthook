import React from "react";
import "./productlisting-module.css";
import Header from "../components/Header";

const ProductListing = ({ products }) => {
  return (
    <>
      <Header />
      <div className="product-layout">
        {products.map(({ id, title, thumbnail }) => {
          return (
            <div className="product-border" key={id}>
              <img src={thumbnail} alt="" />
              <h5>{title}</h5>
              <button className="button">add to cart</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProductListing;
