import { generateSecretCode, checkAttempt } from '../utils';
import { observable, computed, action, decorate } from 'mobx';

class Attempt {
  constructor(difficulty) {
    this.values = new Array(difficulty).fill(null);
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
})

export default class GameStore {
  constructor() {
    this.currentRow = 0;
    this.difficulty = 3;
    this.maxAttempts = 10;
    this.hasWon = false;
    this.hasFinished = false;
    this.score = 0;
    this.currentPlayerId = '';
    this.currentSecretCode = '';
    this.attempts = [];
  }

  // computed
  get remainingAttempts() {
    return this.attempts.filter((attempt) => !attempt.played).length;
  }

  // action
  playAttempt({ values }) {
    let attempt = this.attempts[this.currentRow];
    const { 
        rightNumberRightPlace,
        rightNumberWrongPlace
    } = checkAttempt({ 
      attempt: values,
      code: this.currentSecretCode
    });
    attempt.values = values;
    attempt.whites = rightNumberRightPlace;
    attempt.blacks = rightNumberWrongPlace;
    attempt.played = true;

    this.attempts[this.currentRow] = attempt;
    if (attempt.whites === this.difficulty) {
        this.hasFinished = true;
        this.hasWon = true;
        this.endDateTime = new Date();
        // TODO: calculateScore
    }
    this.currentRow++;
  }

  createInitialAttempts({ maxAttempts, difficulty }) {
    return new Array(maxAttempts).fill(1).map(() => {
      return new Attempt(difficulty);
    });
  }

  // action
  start({ difficulty, maxAttempts, player }) {
    this.difficulty = difficulty;
    this.maxAttempts = maxAttempts;

    this.currentPlayerId = player;
    this.currentSecretCode = generateSecretCode({ difficulty });
    this.attempts = this.createInitialAttempts({ maxAttempts, difficulty });
    const now = new Date();
    this.startDateTime = now;
    this.endDateTime = now;
  }
}

decorate(GameStore, {
    remainingAttempts: computed,
    start: action,
    playAttempt: action,
    hasWon: observable,
    hasFinished: observable,
    currentRow: observable,
    attempts: observable
})
