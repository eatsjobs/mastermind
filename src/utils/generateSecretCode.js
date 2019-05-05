/**
 * @param {Object} params - the params
 * @param {Number} [params.difficulty=3] - the difficulty of the code
 * @returns {Array}
 */
export function generateSecretCode({ difficulty = 3 } = {}) {
    let code = [];
    for (let i = 0; i < difficulty; i++) {
        code.push(parseInt((Math.random() * 9)));
    }
    return code;
}