import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';

class BeerRandom extends Component {
  state = {
    beerRandom: {},
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState({
          beerRandom: data[Math.floor(Math.random() * data.length)],
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beerRandom, loading } = this.state;
    return (
      <div className="Loading">
        <div>
          <Header />
        </div>
        {!loading && (
          <div>
            <img
              className="beer-img"
              src={beerRandom.image_url}
              alt="beer"
            ></img>
            <div className="beer-description">
              <h2>{beerRandom.name}</h2>
              <p>{beerRandom.tagline}</p>
              <p>
                {beerRandom.first_brewed}{' '}
                <strong>{beerRandom.attenuation_level}</strong>
              </p>
              <p>{beerRandom.description}</p>
              <p>Contributed by {beerRandom.contributed_by}</p>
            </div>
          </div>
        )}
        {loading && <div>loading...</div>}
      </div>
    );
  }
}

export default BeerRandom;
