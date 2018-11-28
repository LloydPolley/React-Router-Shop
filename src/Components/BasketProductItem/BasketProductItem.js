import React, { Component } from "react";
import "./BasketProductItem.css";

class BasketProductItem extends Component {

  removeItem = () => {
    this.props.removeItem(this.props.product);
  }

  render() {
    return (
      <div className="basket-products">
        <button onClick={this.removeItem}>X</button>
        <img src={this.props.product.url} alt={this.props.product.title} />
        <div className="box">
          <p>{this.props.product.title}</p>
        </div>
        <div className="box">
          <p>Quantity 1</p>
        </div>
        <div className="box">
          <p>£20</p>
        </div>
      </div>
    );
  }
}

export default BasketProductItem;
