import './App.css';
import Team from './components/team';
import Game from './components/game';
function App() {
  return (
    <div className="App">
      <h1>Torneo ⚽</h1>
      <Team />
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
