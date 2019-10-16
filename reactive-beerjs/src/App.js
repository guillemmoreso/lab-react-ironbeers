import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BeerList from './components/BeerList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/beers" component={BeerList}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
