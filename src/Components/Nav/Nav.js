import React, { Component } from 'react';
import './Nav.css';

import {NavLink} from 'react-router-dom';

import BasketData from '../BasketData/BasketData';

class Nav extends Component {
  constructor(props){
    super(props);
    this.state = {
      numberOfItems: BasketData.numberOfItems
    }
  }
  render() {
    return (
      <div className="navigation">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/all">All Items</NavLink>
        <NavLink to="/basket" onChange={this.onChange}>My Basket {BasketData.numberOfItems}</NavLink>
      </div>
    );
  }
}

export default Nav;