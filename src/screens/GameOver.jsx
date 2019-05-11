import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { Button } from '../components';
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
    const { gameStore } = this.props;
    return <div>
      <div> 
        <div>
          {gameStore.currentPlayer.name}
        </div>
        <div>
          {gameStore.hasWon ? 'WON!' : 'LOOSE'} Solution was: {gameStore.currentSecretCode.join(', ')}
        </div>
      </div>
      <div style={{ display: 'flex' }}>
        <div>
          <Button onClick={this.onRestart}>Restart</Button>
        </div>
        <div>
          <Button onClick={this.onBack}>Go To Home</Button>
        </div>
      </div>
    </div>
  }
}

export default inject('gameStore')(observer(GameOver));