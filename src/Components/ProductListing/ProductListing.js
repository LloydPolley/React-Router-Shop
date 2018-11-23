import React, { Component } from "react";
import "./ProductListing.css";

import ProductItem from "../ProductItem/ProductItem";
import BasketData from "../BasketData/BasketData";

import { APIData, AppState } from "../APIData/APIData";

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

      this.setState({
        products: window.products,
        loading: false
      })
    }

    //Loop and check if boolean if true from API data
    // setTimeout(() => {
    //   console.log(AppState.data);
    //   this.setState({
    //     products: AppState.data,
    //     loading: false
    //   });
    // }, 500);
  };

  addItem = json => {
    BasketData.addItem(json);
  };
  render() {
    let content;
    if (this.state.loading) {
      content = <h1>loading</h1>;
    }else{
      content =this.state.products.map(product => {
        return <ProductItem key={product.id} product={product} addItem={this.addItem}/>;
      });
    }
    return <div className="ProductListings">{content}</div>;
  }
}

export default ProductListing;
