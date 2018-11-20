import React, { Component } from 'react';
import './App.css';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './Components/Home/Home';
import ProductListing from './Components/ProductListing/ProductListing';
import Basket from './Components/Basket/Basket';
import Nav from './Components/Nav/Nav';
import Error from './Components/Error/Error';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav />
            <Switch>
              <Route path="/" component={Home} exact/>
              <Route path="/all" component={ProductListing} />
              <Route path="/basket" component={Basket} />
              <Route component={Error}/>
            </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;
