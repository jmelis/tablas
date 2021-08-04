import React, { useState } from 'react';
import Results from './results.js';

function Game({ questions, setPage, levelName }) {
    const [data, setData] = useState([Date.now()]);
    const [qIndex, setqIndex] = useState(0);
    const [qLabel, setqLabel] = useState(questions[0]);
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
