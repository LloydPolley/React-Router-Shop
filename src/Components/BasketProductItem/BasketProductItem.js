import React, { Component } from "react";
import "./BasketProductItem.css";

class BasketProductItem extends Component {
  render() {
    return (
      <div className="basket-products">
        <button onClick={this.props.removeItem}>X</button>
        <img src={this.props.json.json.url} alt={this.props.json.json.title} />
        <div className="box">
          <p>{this.props.json.json.title}</p>
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
