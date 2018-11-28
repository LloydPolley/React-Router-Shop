import React, { Component } from "react";
import "./Basket.css";

import BasketProductItem from "../BasketProductItem/BasketProductItem";
import BasketData from "../BasketData/BasketData";


class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productsAdded: [],
      totalCost: 0,
      numberOfItems: 0
    };
  } 

  componentDidMount = () => {    
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
    });
  };

  render() {
    let content;
    if (this.state.productsAdded.length === 0) {
      content = <h1>Empty</h1>;
    }else{
      content = this.state.productsAdded.map(product => {
        return <BasketProductItem key={product.key} product={product} removeItem={this.removeItem}/>
      });
    }
    return <div className="basket-container"><h2 id="basket-title">Basket</h2>{content}</div>;
  }
}

export default Basket;
