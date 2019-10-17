import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BeerList extends Component {
  state = {
    beers: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get('https://ih-beer-api.herokuapp.com/beers')
      .then(({ data }) => {
        this.setState({
          beers: data,
          loading: false,
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const { beers, loading } = this.state;
    return (
      <div className="Loading">
        {!loading &&
          beers.map(beer => {
            return (
              <div>
                <Link key={beer._id} to={`/beers/${beer._id}`}>
                  <img
                    className="beer-img"
                    src={beer.image_url}
                    alt={beer.name}
                  />
                </Link>
                <div className="beer-info">
                  <h3>{beer.name}</h3>
                  <span>{beer.tagline}</span>
                  <small>Created by: {beer.contributed_by}</small>
                </div>
              </div>
            );
          })}{' '}
        {loading && <div>loading...</div>}
      </div>
    );
  }
}

export default BeerList;
