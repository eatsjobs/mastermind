import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Button } from '../components';

const InputContainer = styled.div`
  display: flex;
  
  & label {
    flex: 1;
  }
  & input {
    flex: 1;
    margin-left: 5px;
  }
`;

const ButtonContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

class Home extends Component {
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

  startGame = () => {
    // TODO: Remove this state and took the one in gameStore
    this.props.history.push('/play', { 
      difficulty: parseInt(this.state.difficulty),
      attempts: parseInt(this.state.attempts)
    });
  }

  render() {
    const { difficulty, attempts } = this.state;
    return <div>
      <InputContainer>
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
      </InputContainer>
      <InputContainer>
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
      </InputContainer>
      <ButtonContainer>
        <Button onClick={this.startGame}>
          Start
        </Button>
      </ButtonContainer>
    </div>
  }
}

export default inject('gameStore')(observer(Home));