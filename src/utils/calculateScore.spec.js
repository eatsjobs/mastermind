import { calculateScore } from './calculateScore';

test('calculate score', () => {
    const game = {
        difficulty: 5,
        duration: 5000
    }

    const game2 = {
        difficulty: 3,
        duration: 5000
    }
    const score1 = calculateScore(game);
    const score2 = calculateScore(game2);
    console.log({ score1, score2 });
    expect(score1).toBeGreaterThan(score2);
    
});