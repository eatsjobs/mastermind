import React, { Component } from 'react';
import { inject, observer } from 'mobx-react';
import styled from 'styled-components';
import { Button } from '../components';

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  & ${Button}:first-child {
    margin-right: 5px;
  } 
`;

const MainContainer = styled.div`
  max-width: 700px;
  background: rgba(255,255,255,0.3);
  min-height: 150px;
  border-radius: 5px;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 5px;
`;

class LeaderBoard extends Component {
  render() {
    const { items } = this.props;
    return (<div>
        <div style={{ textAlign: 'center' }}>Top 5</div>
        {items.length > 0 ? <ol>
          {items.map((player) => {
            console.log(player);
            return <li>
              <div>{player.name}</div>
              <div>{player.max}</div>
            </li>
          })}
        </ol> : <span>still empty :(</span>}
    </div>)
  }
}

class GameOver extends Component {
  
  onRestart = () => {
    const { history, gameStore } = this.props;
    gameStore.start();
    history.push('/play');
  }

  onBack = () => {
    const { history, gameStore } = this.props;
    gameStore.reset();
    history.push('/');
  }

  render() {
    const { gameStore, leaderBoardStore } = this.props;
    return <div>
      <MainContainer>
        <div>
          <div>
            {gameStore.currentPlayer.name}
          </div>
          <div>
            <div>
            {gameStore.currentPlayer} {gameStore.hasWon ? 'WON!' : 'LOOSE'}
            </div>
            <div>
              Solution was: {gameStore.currentSecretCode.join(', ')}
            </div>
          </div>
        </div>
        <ButtonsContainer>
          <Button onClick={this.onRestart}>Restart</Button>
          <Button onClick={this.onBack}>Go To Home</Button>
        </ButtonsContainer>
      </MainContainer>
      <MainContainer>
        <LeaderBoard items={leaderBoardStore.getRanking()} />
      </MainContainer>
    </div>
  }
}

export default inject('gameStore', 'leaderBoardStore')(observer(GameOver));