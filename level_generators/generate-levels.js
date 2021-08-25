const fs = require('fs');

let levels = [];

// generate addition tables
for (let num = 1; num <= 10; num++) {
    let questions = [];
    for (let i = 1; i <= 10; i++) {
        questions.push(`${i} + ${num} = ${i+num}`);
    }

    const level = {
        'name': `tabla_suma_${num}`,
        'size': 10,
        'shuffle': true,
        'questions': questions,
    }

    levels.push(level);
}

fs.writeFileSync('src/assets/levels.json', JSON.stringify(levels, null, 2));
