//import { observable, decorate } from 'mobx';
import Player from './Player';

class LeaderBoard {
  constructor() {
    this.players = [];
  }
  
  save = () => {

  }

  load = () => {

  }

  
  addScore(name, game) {
    // if a player with the same name already played...
    let player = this.players.find(u => u.name === name);
    if (player) {
      return player.addScore(game);
    } else {
      let newPlayer = new Player(name);
      newPlayer.addScore(game);
      this.players.push(newPlayer);
    };
  }

  // get the top five by default
  getRanking({ top = 5 } = {}) {
    return this.players.sort((u1, u2) => u2.max - u1.max).slice(0, top);
  }
}
const leaderBoardInstance = new LeaderBoard();
export default leaderBoardInstance;