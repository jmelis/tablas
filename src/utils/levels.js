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

export const levels = {
    'tabla_suma_1': addition_table(1),
    'tabla_suma_2': addition_table(2),
    'tabla_suma_3': addition_table(3),
    'tabla_suma_4': addition_table(4),
    'tabla_suma_5': addition_table(5),
    'tabla_suma_6': addition_table(6),
    'tabla_suma_7': addition_table(7),
    'tabla_suma_8': addition_table(8),
    'tabla_suma_9': addition_table(9),
    'tabla_suma_10': addition_table(10),
};

function addition_table(num) {
    const numInt = parseInt(num);
    let qs = [];
    for (let i = 1; i <= 10; i++) {
        qs.push(`${i} + ${numInt} = ${i + numInt}`);
    }
    shuffleArray(qs);
    return qs;
}

export default levels;
