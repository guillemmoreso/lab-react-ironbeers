import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import BeerList from './components/BeerList';
import Beer from './components/Beer';
import BeerRandom from './components/BeerRandom';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/beers" component={BeerList} />
            <Route exact path="/beers/:id" component={Beer} />
            <Route exact path="/random-beer" component={BeerRandom} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
