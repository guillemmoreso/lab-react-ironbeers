import React, { Component } from 'react';
import axios from 'axios';

class Beer extends Component {
  state = {
    beers: [],
    beer: {},
  };

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState(
          {
            beers: data,
          },
          this.findMatchingBeer,
        );
      })
      .catch(error => {
        console.log(error);
      });
  }

  findMatchingBeer = () => {
    const { beers } = this.state;
    const { id } = this.props.match.params;
    const beer = beers.find(beer => {
      return beer._id === id;
    });
    this.setState({
      beer,
    });
  };

  render() {
    const { beer } = this.state;
    return (
      <div>
        <img className="beer-img" src={beer.image_url} alt="beer"></img>
        <div className="beer-description">
          <h2>{beer.name}</h2>
          <p>{beer.tagline}</p>
          <p>
            {beer.first_brewed} <strong>{beer.attenuation_level}</strong>
          </p>
          <p>{beer.description}</p>
          <p>Contributed by {beer.contributed_by}</p>
        </div>
      </div>
    );
  }
}

export default Beer;
