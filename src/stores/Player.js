import { observable, decorate } from 'mobx';

class Player {
    static uuid = 0;
    constructor(name) {
        this.name = name;
        this.uuid = ++Player.uuid;
        this.scores = [];
    }
    
    addScore = (score) => {
        this.scores.push(score);
    }

    get max() {
        return Math.max(...this.scores.map(game => game.score));
    }

    get average() {

    }
}

decorate(Player, {
    name: observable
});

export default Player;