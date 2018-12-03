import React, { Component } from "react";
import "./SearchSuggest.css";

import ProductItem from "../ProductItem/ProductItem";


class SearchSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      searchSuggestions: []
    };
  }

  componentDidMount = async () => {
    this.setState({

    })
  };

  searchProducts = (productSearch) => {
    //get current search results found
    let filteredProducts = window.products.filter(function(product) {
      let isTitleMatch = product.title.toLowerCase().includes(productSearch.target.value);
      return isTitleMatch;
    });
    this.props.search(filteredProducts);
  };

  findSuggestions = () => {

  }

  

  render() {
    let contents;

    contents = this.state.searchSuggestions.map(product => {
      return (
        <li
          key={product.key}
          product={product}
        ></li>
      );
    })
    
    return (
      <div>
        <div className="searchArea">
          <h2>Products</h2>
          <input id='searchInput' onChange={this.searchProducts}/>
          <ul id='searchSuggestions'>
            {contents}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchSuggest;
