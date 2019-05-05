/**
 * @param {Object} params
 * @param {Array} params.attempt - the user input code
 * @param {Array} params.code - the code generate once the game started
 */
export function checkAttempt({ attempt, code } = {}) {
    if (attempt.length !== code.length) {
        return false
    }

    let rightNumberWrongPlace = 0;
    let rightNumberRightPlace = 0;
    for (let i = 0; i < code.length; i++) {
        if (code[i] === attempt[i]) {
            rightNumberRightPlace++;
        } else {
            if (attempt.indexOf(code[i]) > -1) {
                rightNumberWrongPlace++;
            }
        }
    }
   
    return {
        rightNumberRightPlace,
        rightNumberWrongPlace
    }
}