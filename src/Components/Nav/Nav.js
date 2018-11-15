import React, { Component } from 'react';
import './Nav.css';

import {NavLink} from 'react-router-dom';

class Nav extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all">All Items</NavLink>
        <NavLink to="/basket">My Basket</NavLink>
      </div>
    );
  }
}

export default Nav;