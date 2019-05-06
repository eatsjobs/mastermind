import { checkAttempt } from './checkAttempt';

test('checkAttempt with two array with different length', () => {
    const result = checkAttempt({ attempt: [1,2,3,4], code: [1,2,3] });
    expect(result).toBe(false);
});

test('checkAttempt with two empty array', () => {
    const result = checkAttempt({ attempt: [], code: [] });
    const { rightNumberRightPlace, rightNumberWrongPlace } = result;
    expect(rightNumberRightPlace).toBe(0);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt win', () => {
    const { 
        rightNumberRightPlace, 
        rightNumberWrongPlace
    } = checkAttempt({ attempt: [ 1, 2, 3 ], code: [ 1, 2, 3 ] });
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

test('checkAttempt with 226 with code 627', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 2, 2, 6 ], code: [ 6, 2, 7 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(1);
});

test('checkAttempt with 272 with code 627', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 2, 7, 2 ], code: [ 6, 2, 7 ] });
    expect(rightNumberRightPlace).toBe(0);
    expect(rightNumberWrongPlace).toBe(2);
});

test('checkAttempt with 22726 with code 62727 should give rightNumberRightPlace: 3, rightNumberWrongPlace: 1', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 2,2,7,2,6 ], code: [ 6, 2, 7, 2, 7 ] });
    expect(rightNumberRightPlace).toBe(3);
    expect(rightNumberWrongPlace).toBe(1);
});

test('checkAttempt with 123 with code 353', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 1, 2, 3 ], code: [ 3, 5, 3 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with 333 with code 353', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 3, 3, 3 ], code: [ 3, 5, 3 ] });
    expect(rightNumberRightPlace).toBe(2);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with 555 with code 353', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 5, 5, 5 ], code: [ 3, 5, 3 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt with 123 with code 222', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 1,2,3 ], code: [ 2,2,2 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(0);
});

test('checkAttempt code: 5215, attempt: 5553 should be 1,1', () => {
    const { rightNumberRightPlace, rightNumberWrongPlace } = checkAttempt({ attempt: [ 5, 5, 5, 3 ], code: [ 5, 2, 1, 5 ] });
    expect(rightNumberRightPlace).toBe(1);
    expect(rightNumberWrongPlace).toBe(1);
});