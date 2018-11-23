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
    let json = this.props.json;
    this.props.addItem(json);

    this.setState({
      added: true,
      value: '✔'
    });

    console.log(this.state);
  };


  render() {
    return (
      <div className="product">
        <img src={this.props.json.url} alt={this.props.json.title} />
        <div className="overlay">
          <div className="overlay-content">
            <p className="title">{this.props.json.title}</p>
            <button className="add-button" onClick={this.addItem} title="Add to basket">{this.state.value}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
