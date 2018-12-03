import React, { Component } from "react";
import "./BasketProductItem.css";

const BasketProductItem = (props) => {
  const removeItem = () => {
    props.removeItem(props.product);
  };

  return (
    <div className="basket-products">
      <button onClick={removeItem}>X</button>
      <img src={props.product.url} alt={props.product.title} />
      <div className="box">
        <p>{props.product.title}</p>
      </div>
      <div className="box">
        <p>Quantity 1</p>
      </div>
      <div className="box">
        <p>£20</p>
      </div>
    </div>
  );
};

export default BasketProductItem;
