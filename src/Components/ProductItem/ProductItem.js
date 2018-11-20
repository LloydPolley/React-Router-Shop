import React, { Component } from "react";
import "./ProductItem.css";

class ProductItem extends Component {
  constructor(props){
    super(props);

    this.state = {
      added: false,
      value: '+'
    }
  }
  addItem = (e) => {
    let keyId = this.props.keyId;
    let title = this.props.imgTitle;
    let imgUrl = this.props.imgSrc;
    this.props.addItem(keyId, title, imgUrl);

    this.setState({
      added: true,
      value: '✔'
    });

    console.log(this.state);
    
  };


  render() {
    return (
      <div className="product">
        <img src={this.props.imgSrc} alt={this.props.imgTitle} />
        <div className="overlay">
          <div className="overlay-content">
            <p className="title">{this.props.imgTitle}</p>
            <button className="add-button" onClick={this.addItem} title="Add to basket">{this.state.value}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
