import React, { Component } from "react";
import "./BasketProductItem.css";

class BasketProductItem extends Component {
  addItem = () => {
    let title = this.props.imgTitle;
    let imgUrl = this.props.imgSrc;
    this.props.addItem(title, imgUrl);
  };

  render() {
    return (
      <div className="basket-products">
        <button onClick={this.props.removeItem}>X</button>
        <img src={this.props.imgSrc} alt={this.props.imgTitle} />
        <div className="box">
          <p>{this.props.imgTitle}</p>
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
