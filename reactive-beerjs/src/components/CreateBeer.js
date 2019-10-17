import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import { Redirect } from 'react-router-dom';

class CreateBeer extends Component {
  state = {
    name: '',
    tagline: '',
    description: '',
    first_brewed: '',
    brewers_tips: '',
    attenuation_level: '',
    contributed_by: '',
  };

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  createNewBeer = () => {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    const newBeer = {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    };
    console.log(newBeer);
    axios
      .post('https://ih-beer-api.herokuapp.com/beers/new', newBeer)
      .then(response => {
        console.log(response);
        
        // REDIRECT NO FUNCIONA
        return <Redirect to="/" />;
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    const {
      name,
      tagline,
      description,
      first_brewed,
      brewers_tips,
      attenuation_level,
      contributed_by,
    } = this.state;
    return (
      <div className="form">
        <div>
          <Header />
        </div>
        <label>
          Name
          <input
            type="text"
            name="name"
            value={name}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <label>
          Tagline
          <input
            type="text"
            name="tagline"
            value={tagline}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <label>
          First brewed
          <input
            type="text"
            name="first_brewed"
            value={first_brewed}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <label>
          Brewers tips
          <input
            type="text"
            name="brewers_tips"
            value={brewers_tips}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <label>
          Attenuation level
          <input
            type="text"
            name="attenuation_level"
            value={attenuation_level}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <label>
          Contributed by
          <input
            type="text"
            name="contributed_by"
            value={contributed_by}
            onChange={e => this.updateInput(e)}
          />
        </label>
        <input type="submit" value="Save" onClick={this.createNewBeer} />
      </div>
    );
  }
}

export default CreateBeer;
