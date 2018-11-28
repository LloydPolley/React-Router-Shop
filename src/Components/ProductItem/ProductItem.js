import React, { Component } from "react";
import "./ProductItem.css";

class ProductItem extends Component {
  constructor(props){
    super(props);
    this.state = {
      added: false,
    }
  }
  componentWillMount = (e) => {
    this.setState({
      added: window.products.selected
    });

    if(this.state.added === true){
      e.target.disabled = 'disabled';
    }
  }

  addItem = (e) => {
    let json = this.props.json;

    this.props.addItem(json);

    e.target.disabled = 'disabled';

    this.setState({
      added: true,
    });
  };

  addItemContent = () => {
    this.addItem();
  }

  render() {
    return (
      <div className="product">
        <img src={this.props.product.url} alt={this.props.product.title} />
        <div className="overlay">
          <div className="overlay-content">
            <p className="title">{this.props.product.title}</p>
            <button className="add-button" onClick={this.addItem} title="Add to basket">{this.props.product.selected.toString()}</button>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
