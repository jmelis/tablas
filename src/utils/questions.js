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

function questions(num) {
    let qs = [];
    for (let i = 1; i < 11; i++) {
        qs.push(`${i} + ${num} = ${i + num}`);
    }
    shuffleArray(qs);
    return qs;
}

export default questions;
