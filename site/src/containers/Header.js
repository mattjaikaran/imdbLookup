import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
  render() {
    return <div className="App-header">
      <h1>Movie Directory</h1>
      <h3>IMDB Movie Lookup</h3>
        <div className="navBar">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
      </div>
  </div>
  }
}

module.exports = Header;
