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

  searchProducts = (productSearch) => {
    this.setState({
      searchValue: productSearch.target.value
    });
    //get current search results found
    let filteredProducts = window.products.filter(function(product) {
      let isTitleMatch = product.title.toLowerCase().includes(productSearch.target.value);
      return isTitleMatch;
    });
    this.props.search(filteredProducts);

    if(productSearch.target.value.length < 2){
      this.setState({
        searchSuggestions: []
      })
    }else{
      this.findSuggestions(filteredProducts);
    }
  };

  findSuggestions = (currentSearch) => {
    console.log(currentSearch);
    this.setState({
      searchSuggestions: currentSearch
    })
  }

  selectSuggestion = (target) => {
    console.log(target);
    console.log(this.state.searchValue);

    this.myTrim(target);

    this.setState({
      searchValue: target
    });
  }

  render() {
    let contents;
    contents = this.state.searchSuggestions.map(product => {
      return (
        <li key={product.key} onClick={(e) => this.selectSuggestion(e.target.innerHTML)}> {product.title} </li>
      );
    })
    
    return (
      <div>
        <div className="searchArea">
          <h2>Products</h2>
          <input id='searchInput' onChange={this.searchProducts} value={this.state.searchValue}/>
          <ul id='searchSuggestions'>
            {contents}
          </ul>
        </div>
      </div>
    );
  }
}

export default SearchSuggest;
