import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class GameOver extends Component {
  render() {
    return <div>
      <div>
        <Link to='/'>Go To Home</Link>
      </div>
    </div>
  }
}