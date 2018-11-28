import React, { Component } from "react";
import "./ProductListing.css";

import ProductItem from "../ProductItem/ProductItem";
import BasketData from "../BasketData/BasketData";

import { APIData } from "../APIData/APIData";

class ProductListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: null,
      loading: true, 
      numberOfItems: 0
    };
  }

  componentDidMount = async () => {
    if (!window.products) {
      let response = await APIData();
      console.log(response)
      window.products = response;
      window.products.forEach(item => item.selected = false);
      window.products.forEach(item => {
        let uniqueKey = Date.now() + Math.random();
        item.key = uniqueKey;
      });

      this.setState({
        products: window.products,
        loading: false
      });
    } else{
      this.setState({
        products: window.products,
        loading: false
      });
    }
  };

  addItem = json => {
    console.log(json);
    var addedId = json.id;
    var temp = window.products;
    for( var i =0; i < temp.length; i++){
      if(temp[i].id === addedId){
        temp[i].selected = true;
      }
    }
    BasketData.addItem(json);
    console.log('added');
  };

  render() {
    let content;
    if (this.state.loading) {
      content = <div id='loading-icon'></div>;
    }else{
      content =this.state.products.map(product => {
        return <ProductItem key={product.key} product={product} addItem={((e) => this.addItem(product))}/>;
      });
    }
    return <div className="ProductListings">{content}</div>;
  }
}

export default ProductListing;
