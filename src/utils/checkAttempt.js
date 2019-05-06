/**
 * @param {Object} params
 * @param {Array} params.attempt - the user input code
 * @param {Array} params.code - the code generate once the game started
 */
export function checkAttempt({ attempt, code } = {}) {
    if (attempt.length !== code.length) {
        return false
    }
    // TODO: write better?
    let rightNumbersRightPlace = code.filter((v,i) => v === attempt[i]);
    let k;
    let rightNumbersWrongPlace = code.filter((v, j) => {
        k = attempt.indexOf(v);
        /** 
            Is in attempt, is not at the same position, it's not already in the rightNumbersRightPlace array
        */
        return k > -1 && k !== j && rightNumbersRightPlace.indexOf(v) === -1;
    })
    
    return {
        rightNumberRightPlace: rightNumbersRightPlace.length,
        rightNumberWrongPlace: rightNumbersWrongPlace.length
    }
}