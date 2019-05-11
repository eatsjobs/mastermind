import Player from "./Player";

class LeaderBoard {
    constructor() {
        this.players = [];
    }

    addScore(name, score) {
      let player = this.player.find(u => u.name === name);
      if (player) {
        return player.addScore(score);
      } else {
        let newPlayer = new Player(name);
        return newPlayer.addScore(score);
      };
    }

    // get the top five by default
    getRanking({ top = 5 }) {
        return this.players.sort((u1, u2) => u2.max - u1.max).slice(0, top);
    }
}

export default new LeaderBoard();