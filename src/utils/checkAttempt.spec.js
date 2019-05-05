import { checkAttempt } from './checkAttempt';

test('checkAttempt win', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [1,2,3], code: [1,2,3] });
    expect(rightNumberRightPlace).toBe(3);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with a number not in code', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [0, 2, 3], code: [ 1, 2, 3] });
    expect(rightNumberRightPlace).toBe(2);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with all number but all in wrong positions', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [3, 1, 2], code: [ 1, 2, 3] });
    expect(rightNumberRightPlace).toBe(0);
    expect(rightNumberWrongPlace).toBe(3);
});

test('checkAttempt with 222 with code 267', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 2, 2, 2 ], code: [ 2, 6, 7 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with 222 with code 627', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 2, 2, 2 ], code: [ 6, 2, 7 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with 272 with code 627', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 2, 7, 2 ], code: [ 6, 2, 7 ] });
    expect(rightNumberRightPlace).toBe(0);
    expect(rightNumberWrongPlace).toBe(2);
});