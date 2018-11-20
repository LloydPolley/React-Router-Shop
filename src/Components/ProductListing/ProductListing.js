import React, { Component } from "react";
import "./ProductListing.css";

import ProductItem from "../ProductItem/ProductItem";
import BasketData from '../Basket/BasketData/BasketData';


class ProductListing extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: true
    }
  }

  componentWillMount = async () => {
    let response = await fetch("https://jsonplaceholder.typicode.com/photos?_limit=12");
    let jsonResponse = await response.json();
    this.setState({
      products: jsonResponse,
      loading: false
    });
    console.log(this.state.products);
  };

  addItem = (id, title, url, albumId) => {
    BasketData.addItem(id, title, url, albumId);
    console.log(`Added ${title}`);
  }

  render() {
    let content;
    if(this.state.loading){
      content = <h1>loading</h1>
    } else{
      content =this.state.products.map(product => {
        return <ProductItem key={product.id} keyId={product.id} albumId={product.albumId} imgSrc={product.url} imgTitle={product.title} addItem={this.addItem}/>;
      });
    }
    return (
      <div className="ProductListings"> 
        {content}
      </div>
    );
  }
}

export default ProductListing;
