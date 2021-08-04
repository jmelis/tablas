import React, { useState, useEffect } from 'react';
import Results from './results.js';

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

function Game({ setPage, levelName, levels }) {
    const [data, setData] = useState([Date.now()]);
    const [qIndex, setqIndex] = useState(0);
    const [qLabel, setqLabel] = useState();

    const level = levels.find(l => l['name'] === levelName);
    let questions = level['questions'];

    useEffect(() => {
        if (level['shuffle']) {
            shuffleArray(questions);
        };
        setqLabel(questions[0]);
    }, [level, questions]);

    const gameOnGoing = qIndex + 1 <= questions.length;

    function handleNext(e) {
      e.preventDefault();
      setData(data.concat([questions[qIndex], Date.now()]));
      setqLabel(questions[qIndex + 1]);
      setqIndex(qIndex + 1);
    }

    return (
      <div>
        {gameOnGoing && <div className="Game">
          <div>count: {qIndex + 1} / {questions.length}</div>
          <div>{qLabel}</div>
          <input type='button' value='next' onClick={handleNext}/>
        </div>}

        {!gameOnGoing && <Results setPage={setPage} data={data} levelName={levelName} />}
      </div>
    )
}

export default Game;
