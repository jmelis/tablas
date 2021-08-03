import React, { useState } from 'react';

function Game({ questions }) {
    const [times, setTimes] = useState([Date.now()]);
    const [qIndex, setqIndex] = useState(0);
    const [qLabel, setqLabel] = useState(questions[0]);

    function handleNext(e) {
      e.preventDefault();
      setTimes(times.concat([Date.now()]));
      setqLabel(questions[qIndex + 1]);
      setqIndex(qIndex + 1);
    }

    return (
      <div className="Game">
        <div>count: {qIndex + 1} / {questions.length}</div>
        <div>{qLabel}</div>
        <input type='button' value='next' onClick={handleNext}/>
      </div>
    )
}

export default Game;
