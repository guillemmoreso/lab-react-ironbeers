import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <article>
          <Link to="/beers">
            <img
              src="https://images.unsplash.com/photo-1518176258769-f227c798150e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1789&q=80"
              alt="all-beers"
            ></img>
          </Link>
          <h1>All Beers</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi totam
            nihil praesentium? Error doloremque atque, aliquid enim voluptatem
            aliquam ex accusantium. Error placeat praesentium deleniti tenetur,
            necessitatibus aut quidem fugit. Ullam officiis eos tempora
            assumenda quod maxime ipsum consequatur iusto. Blanditiis explicabo,
            magni tempore molestiae.
          </p>
        </article>

        <article>
          <Link to="/random-beer">
            <img
              src="https://images.unsplash.com/photo-1543791959-12b3f543282a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1567&q=80"
              alt="random-beer"
            ></img>
          </Link>
          <h1>Random Beer</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi totam
            nihil praesentium? Error doloremque atque, aliquid enim voluptatem
            aliquam ex accusantium. Error placeat praesentium deleniti tenetur,
            necessitatibus aut quidem fugit. Ullam officiis eos tempora
            assumenda quod maxime ipsum consequatur iusto.
          </p>
        </article>

        <article>
          <Link to="/new-beer">
            <img
              src="https://images.unsplash.com/photo-1532634726-8b9fb99845fd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
              alt="new-beer"
            ></img>
          </Link>
          <h1>New Beer</h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi totam
            nihil praesentium? Error doloremque atque, aliquid enim voluptatem
            aliquam ex accusantium. Error placeat praesentium deleniti tenetur,
            necessitatibus aut quidem fugit.
          </p>
        </article>
      </div>
    );
  }
}

export default Home;
