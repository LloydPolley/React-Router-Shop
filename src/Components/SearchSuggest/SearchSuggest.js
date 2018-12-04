import React, { Component } from "react";
import "./SearchSuggest.css";

class SearchSuggest extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      searchSuggestions: []
    };
    this.searchInput = React.createRef();
    this.setWrapperRef = this.setWrapperRef.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  setWrapperRef = (node)  => {
    this.wrapperRef = node;
  }

  handleClickOutside = (event) => {
    if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
      console.log('Close drop down');
      this.setState({
        searchSuggestions: []
      })
    }
  }

  searchProducts = productSearch => {
    let data;
    this.setState(
      {
        searchValue: productSearch.target.value
      },
      () => {
        data = this.getFilteredSearch(this.state.searchValue);
        console.log("data", data);
        this.props.search(data);
        this.findSuggestions(data);
        console.log(this.state.searchSuggestions.length);
      }
    );
    if (productSearch.target.value.length === 0) {
      console.log("search empty");
    }
  };

  getFilteredSearch = inputType => {
    console.log("input type: ", inputType);
    let filteredProducts;
    filteredProducts = window.products.filter(product => {
      let isTitleMatch = product.title.toLowerCase().includes(inputType);
      return isTitleMatch;
    });

    return filteredProducts;
  };

  //Saves
  findSuggestions = currentSearch => {
    console.log("current search", currentSearch);
    this.setState({
      searchSuggestions: currentSearch
    });
  };

  selectSuggestion = target => {
    this.setState(
      {
        searchValue: target,
        searchSuggestions: []
      },
      () => {
        console.log(this.getFilteredSearch(target));
        this.props.search(this.getFilteredSearch(target));
      }
    );
  };

  resetDropDown = () => {
    this.setState({
      searchValue: ""
    });
    this.props.search(window.products);
  };

  render() {
    let contents;
    //if this.state.searchSuggestion is below
    if (this.state.searchValue.length >= 2) {
      contents = this.state.searchSuggestions.map(product => {
        return (
          <li
            key={product.key}
            onClick={e => this.selectSuggestion(e.target.innerHTML)}>
            {product.title}
          </li>
        );
      });
    }
    return (
      <div className="searchComponent">
        <div className="searchArea">
          <h2>Products</h2>
          <div className="searchInputAbso" ref={this.setWrapperRef}>
            <input
              id="searchInput"
              onChange={this.searchProducts}
              value={this.state.searchValue}
              placeholder="Search..."
              ref={this.searchInput}
            />
            <ul id="searchSuggestions">{contents}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchSuggest;
