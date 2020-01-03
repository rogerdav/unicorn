import React, { Component } from 'react';
import './header.css';

class Header extends Component {
  render () {
    return (
      <div>
        <div>
          <h1>
            Unicorn Ranch Dashboard
          </h1>

        </div>
        <div className="subheader">
          <h3>Name</h3>
          <h3>Color</h3>
          <h3>Favorite Food</h3>
          <h3>Location</h3>
        </div>
      </div>
    )
  }
}

export default Header;