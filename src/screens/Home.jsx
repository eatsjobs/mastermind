import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Home extends Component {
  render() {
    return <div>
      <div>
      </div>
      <div>
        <Link to={{
          pathname: '/play',
          state: {
            difficulty: 3,
            attempts: 10
          }
        }}>Start</Link>
      </div>
    </div>
  }
}