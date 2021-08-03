import './App.css';

import Game from './components/game.js';

import questions from './utils/questions.js';

function App() {
  return (
    <Game questions={questions(5)}/>
  )
}

export default App;
