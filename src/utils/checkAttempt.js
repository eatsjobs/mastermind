/**
 * @param {Object} params
 * @param {Array} params.attempt - the user input code
 * @param {Array} params.code - the code generate once the game started
 */
export function checkAttempt({ attempt, code } = {}) {
    let input = attempt.slice();
    let secret = code.slice();
    if (input.length !== secret.length) {
        return false
    }
    let whites = 0, blacks = 0;
    // console.log({ input, secret, blacks });
    // blacks: right Number in right place
    // whites: right number in wrong place
    for (let i = secret.length -1; i >= 0; i--) {
        if (input[i] === secret[i]) {
            blacks++;
            input.splice(i, 1);
            secret.splice(i, 1);
        }
    }

    //console.log({ input, secret, blacks });

    for (let j = input.length -1; j >= 0; j--) {
        for (let k = secret.length - 1; k >= 0; k--) {
            if (input[j] === secret[k]) {
                whites++;
                secret.splice(k, 1);
            }
        }
    }
    //console.log({ input, secret, whites });
    
    return {
        rightNumberRightPlace: blacks,
        rightNumberWrongPlace: whites
    }
}