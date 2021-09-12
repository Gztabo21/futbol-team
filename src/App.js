import './App.css';
import Team from './components/team';
import Game from './components/game';
import Competition from './components/competition';
import { useState } from 'react';
function App() {
  const [competitionId,setCompetitionId] = useState(2001)
  const handleSelect = (e) =>{
    setCompetitionId(e.target.value)
}
  return (
    <div className="App">
      <h1>Torneo ⚽</h1>
      <Competition competitionId={handleSelect} />
      <Team competitionId={competitionId} /> 
      <Game />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
