import React, { Component } from 'react';
import { Link } from "react-router-dom";
export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      difficulty: 3,
      attempts: 10
    }
  }

  onChange = (evt) => {
    this.setState({ 
      [evt.target.name]: 
      evt.target.value
    });
  }

  render() {
    const { difficulty, attempts } = this.state;
    return <div>
      <div>
        <label htmlFor='difficulty'>
          Difficulty:
        </label>
        <input
          type='number'
          min={3}
          value={difficulty}
          name='difficulty'
          onChange={this.onChange}
        />
      </div>
      <div>
        <label htmlFor='attempts'>
          Max attempts:
        </label>
        <input
          type='number'
          value={attempts}
          min={3}
          name='attempts'
          onChange={this.onChange}
        />
      </div>
      <div>
        <Link to={{
          pathname: '/play',
          state: {
            difficulty: parseInt(this.state.difficulty),
            attempts: parseInt(this.state.attempts)
          }
        }}>Start</Link>
      </div>
    </div>
  }
}