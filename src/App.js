import React, { useState } from 'react';

import Home from './components/home.js';
import Game from './components/game.js';
import levels from './assets/levels.json';

import './App.css';

function App() {
  const [levelName, setLevelName] = useState();
  const [page, setPage] = useState('home');

  function handleGameStart(e) {
    setLevelName(e.target.value);
    setPage('game');
  };

  const router = {
    'home': <Home handleGameStart={handleGameStart} levels={levels} />,
    'game': <Game levelName={levelName} levels={levels} setPage={setPage}/>,
  };

  return (
    <div className="App">
      {router[page]}
    </div>
  )
}

export default App;
