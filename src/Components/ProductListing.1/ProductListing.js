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
      numberOfItems: 0,
      searchValue: '',
      searchSuggestions: []
    };
  }

  componentDidMount = async () => {
    if (!window.products) {
      let response = await APIData();
      console.log(response);
      window.products = response;
      window.products.forEach(item => (item.selected = false));
      window.products.forEach(item => {
        let uniqueKey = Date.now() + Math.random();
        item.key = uniqueKey;
      });
      window.products.forEach(item => {
        let searchFound = true;
        item.searchFound = searchFound;
      });
      window.products.forEach(item => {
        item.classNames = 'productItem';
      });

      this.setState({
        products: window.products,
        loading: false
      });
    } else {
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
    for (var i = 0; i < temp.length; i++) {
      if (temp[i].id === addedId) {
        temp[i].selected = true;
      }
    }
    BasketData.addItem(json);
    console.log("added");
  };


  searchProducts = (productSearch) => {
    //get current search results found
    let filteredProducts = window.products.filter(function(product) {
      let isTitleMatch = product.title.toLowerCase().includes(productSearch.target.value);
      return isTitleMatch;
    });
    this.setState({
      products: filteredProducts
    })
    console.log(filteredProducts);
  };

  

  render() {
    let content;
    if (this.state.loading) {
      content = <div id="loading-icon" />;
    } else {
      content = this.state.products.map(product => {
        return (
          <ProductItem
            className={window.products.classNames}
            key={product.key}
            product={product}
            addItem={e => this.addItem(product)}
          />
        );
      });
    }
    return (
      <div>
        <div className="searchArea">
          <h2>Products</h2>
          <input id='searchInput' onChange={this.searchProducts}/>
          <div id='searchSuggestions'>
          {
            suggestions = this.state.products.map(product => {
              return (
                <ProductItem
                  className={window.products.classNames}
                  key={product.key}
                  product={product}
                  addItem={e => this.addItem(product)}
                />
              );
            })
          }
          </div>
        </div>
        <div className="ProductListings">
          {content}
        </div>
      </div>
    );
  }
}

export default ProductListing;
