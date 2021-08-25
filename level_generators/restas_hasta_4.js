const fs = require('fs');

// https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}

const SIZE = 100;
const CHUNK_SIZE = 5;
const LEVELS = 10;

let levels = [];
let questions = [];

// generate subtraction questions
for (let a = 1; a <= 13; a++) {
    for (let b = 1; b <= 4; b++) {
        if (a > b) {
            questions.push(`${a} - ${b} = ${a-b}`);
        }
    }
}

for (let levelNumber = 1; levelNumber <= LEVELS; levelNumber++) {
    const levelQuestions = [];
    while (levelQuestions.length < SIZE) {
        const index = Math.floor(Math.random() * questions.length);
        let levelChunk = [];
        for (let i=0; i<CHUNK_SIZE; i++) {
            levelChunk.push(questions[(index + i) % questions.length]);
        }
        shuffleArray(levelChunk);
        levelQuestions.push(...levelChunk);
    }
    const level = {
        'name': `restas_hasta_4_p${levelNumber}`,
        'size': SIZE,
        'shuffle': false,
        'questions': levelQuestions,
    }
    levels.push(level);
}

fs.writeFileSync('src/assets/levels.json', JSON.stringify(levels, null, 2));
