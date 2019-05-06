import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class GameOver extends Component {
  render() {
    const { code, winning } = this.props.location.state;
    return <div>
      <div> You {winning ? 'WON!' : 'LOOSE'} Solution was: {code.join(' ')} </div>
      <div>
        <div>
          <Link to='/'>Go To Home</Link>
        </div>
      </div>
    </div>
  }
}