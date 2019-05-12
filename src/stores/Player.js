import { observable, decorate } from 'mobx';

class Player {
  static uuid = 0;
  constructor(name) {
      this.name = name;
      this.uuid = ++Player.uuid;
      this.games = [];
  }
  
  addScore = (game) => {
    this.games.push(game);
  }

  get max() {
      return Math.max(...this.games.map(game => game.score));
  }

  get average() {
    return 0;
  }
  
  get lastGame() {
      return this.games.slice(-1)[0];
  }
}

decorate(Player, {
    name: observable
});

export default Player;