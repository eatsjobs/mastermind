import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import styled from 'styled-components';
import { Button } from '../components';

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 5px;
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

  onChange = (evt) => {
    const { gameStore } = this.props;
    const { name, value } = evt.target;
    if (name === 'attempts') {
      gameStore.maxAttempts = parseInt(value, 10);
    } else if(name === 'difficulty') {
      gameStore.difficulty = parseInt(value, 10);
    } else if (name === 'player') {
      gameStore.setPlayerName({ name: value });
    }
  }

  startGame = () => {
    const { gameStore } = this.props;
    gameStore.start();
    this.props.history.push('/play');
  }

  render() {
    const { gameStore } = this.props;
    console.log({ gameStore });
    return <div>
      <InputContainer>
        <label htmlFor='difficulty'>
          Difficulty:
        </label>
        <input
          type='number'
          min={3}
          value={gameStore.difficulty}
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
          value={gameStore.maxAttempts}
          min={3}
          name='attempts'
          onChange={this.onChange}
        />
      </InputContainer>
      <InputContainer>
        <label htmlFor='attempts'>
          PlayerName:
        </label>
        <input
          type='text'
          name='player'
          value={gameStore.currentPlayer}
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