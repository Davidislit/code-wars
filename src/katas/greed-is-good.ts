const diceScores = {
    1: 1000,
    6: 600,
    5: 500,
    4: 400,
    3: 300,
    2: 200,
}

export function score(dice) {
    let result = 0;

    const scoreCount = {};
    dice.forEach(num => {
        if (num in scoreCount) {
            scoreCount[num] = scoreCount[num] + 1;
            if (scoreCount[num] === 3) {
                result += diceScores[num];
                scoreCount[num] = 0;
            }
        } else {
            scoreCount[num] = 1;
        }
    });

    if (1 in scoreCount) result += (100 * scoreCount[1]);
    if (5 in scoreCount) result += (50 * scoreCount[5]);

    return result;
}