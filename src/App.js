import './App.css';
import './components/WordCard/WordCard';
import WordCard from './components/WordCard/WordCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main className="cards-container">
        <WordCard front="translation" back="ubersetzung" />
        <WordCard front="egg" back="ei" />
        <WordCard front="taxi" back="Taxi" />
        <WordCard front="paper" back="Papier" />
        <WordCard front="square" back="Platz"/>

      </main>
    </div>
  );
}

export default App;