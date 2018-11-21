import React, { Component } from "react";
import "./Basket.css";

import BasketProductItem from "../Basket/BasketProductItem/BasketProductItem";
import BasketData from "./BasketData/BasketData";

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsAdded: [],
      totalCost: 0,
      numberOfItems: 0
    };
  }

  componentWillMount = () => {
    let temp = BasketData.items;
    this.setState({
      productsAdded: temp
    });
  };

  removeItem = (product) => {
    BasketData.removeItem(product);
    let temp = BasketData.items;
    this.setState({
      productsAdded: temp
    })
    console.log(product);
  };

  render() {
    return (
      <div className="basket-container">
      <h2 id="basket-title">Basket</h2>
        {this.state.productsAdded.map(product => {
          return (
            <BasketProductItem
              key={product.id}
              imgSrc={product.url}
              imgTitle={product.name}
              removeItem={((e) => this.removeItem(product.id))}
            />
          );
        })}
        <div className="totals">
          
        </div>
      </div>
    );
  }
}

export default Basket;
