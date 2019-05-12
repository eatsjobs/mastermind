export function calculateScore({ difficulty, duration }) {
    /** TODO: better algo? */
    const { sqrt, round, pow } = Math;
    
    const seconds = (duration / 1000);
    const time = (1 / sqrt(seconds)) * 10;
    const finalScore = time + (pow(difficulty, 5));
    return round(finalScore);
}