import { 
  generateSecretCode,
  checkAttempt,
  calculateScore
} from '../utils';
import { observable, computed, action, decorate } from 'mobx';
import LeaderBoard from './LeaderBoard';

class Attempt {
  constructor(difficulty) {
    this.values = new Array(difficulty).fill('');
    this.whites = 0;
    this.blacks = 0;
    this.played = false;
  }
}

decorate(Attempt, {
  values: observable,
  whites: observable,
  blacks: observable,
  played: observable
});


function createInitialAttempts({ maxAttempts, difficulty }) {
  return new Array(maxAttempts).fill(1).map(() => {
    return new Attempt(difficulty);
  });
}

export default class GameStore {
  constructor() {
    this.currentRow = 0;
    this.difficulty = 4;
    this.maxAttempts = 15;
    this.hasWon = false;
    this.hasStarted = false;
    this.hasFinished = false;
    this.score = 0;
    this.currentPlayer = 'Anonymous';
    this.currentSecretCode = [];
    this.attempts = [];
  }

  // computed
  get remainingAttempts() {
    return this.attempts.filter((attempt) => !attempt.played).length;
  }

  // action
  playAttempt = ({ values }) => {
    let attempt = this.attempts[this.currentRow];
    attempt.values = values;
    const { 
        rightNumberRightPlace,
        rightNumberWrongPlace
    } = checkAttempt({ 
      attempt: values,
      code: this.currentSecretCode
    });
    
    attempt.whites = rightNumberRightPlace;
    attempt.blacks = rightNumberWrongPlace;
    attempt.played = true;

    this.attempts[this.currentRow] = attempt;
    if (attempt.whites === this.difficulty) {
        this.hasFinished = true;
        this.hasStarted = false;
        this.hasWon = true;
        this.endDateTime = new Date();        
        LeaderBoard.addScore(this.currentPlayer, this.serialize());
        return;
    }
    if (this.remainingAttempts === 0) {
      this.hasStarted = false;
      this.hasFinished = true;
      return;
    }
    this.currentRow++;
  }


  setPlayerName = ({ name } = {}) => {
    this.currentPlayer = name;
  }

  // action
  start = () => {
    this.currentSecretCode = generateSecretCode({ difficulty: this.difficulty });
    this.attempts = createInitialAttempts({ maxAttempts: this.maxAttempts, difficulty: this.difficulty });
    this.currentRow = 0;
    this.hasWon = false;
    this.hasFinished = false;
    this.hasStarted = true;
    this.score = 0;
    const now = new Date();
    this.startDateTime = now;
    this.endDateTime = now;
  }

  reset = () => {
    this.currentSecretCode = [];
    this.difficulty = 4;
    this.maxAttempts = 15;
    this.attempts = [];
    this.currentRow = 0;
    this.score = 0;
    this.hasWon = false;
    this.hasFinished = false;
    this.hasStarted = false;
    this.currentPlayer = 'Anonymous';
  }

  serialize = () => {
    
    const game = {
      moves: this.currentRow,
      difficulty: this.difficulty,
      hasWon: this.hasWon,
      duration: this.endDateTime - this.startDateTime,
      secretCode: this.currentSecretCode,
      startDateTime: this.startDateTime,
      endDateTime: this.endDateTime,
      score: this.score
    };
    game.score = calculateScore(game);
    return game;
  }
}

decorate(GameStore, {
    remainingAttempts: computed,
    start: action,
    playAttempt: action,
    setPlayerName: action,
    reset: action,
    currentPlayer: observable,
    hasWon: observable,
    hasFinished: observable,
    currentRow: observable,
    attempts: observable,
    maxAttempts: observable,
    difficulty: observable
})
