/**
 * @param {Object} params
 * @param {Array} params.attempt - the user input code
 * @param {Array} params.code - the code generate once the game started
 */
export function check({ attempt, code } = {}) {
    if (attempt.length !== code.length) {
        return false
    }
    const length = code.length;
    const secret = code.slice();
    const guess = attempt.slice();
    let white = 0, black = 0, i = 0, j = 0;
    for (i = 0; i < length; i++) {
        if (secret[i] === guess[i] ) {
            secret[i] = -1;
            black++;
            continue;
        }

        for (j = 0; j < length; j++) {
            if (secret[j] === guess[i]) {
                if (secret[j] === guess[j]) {
                    black++;
                } else {
                    white++;
                }
                secret[j] = -1;
                break;
            }
        }
    }
    return {
        rightNumberRightPlace: black,
        rightNumberWrongPlace: white,
        black,
        white
    }
}