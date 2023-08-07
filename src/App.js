import { useState } from 'react';

import WordCard from './components/WordCard/WordCard';
import WordForm from './components/WordCard/WordForm/WordForm';
import CardsContainer from './components/CardsContainer/CardsContainer';

import './App.css';

function App() {
  const [words, setWords] = useState([
    { front: 'translation', back: 'ubersetzung' },
    { front: 'egg', back: 'Ei' },
    { front: 'taxi', back: 'Taxi' },
    { front: 'paper', back: 'Papier' },
    { front: 'square', back: 'Platz' },
 
  ]);


  const cardList = words.map( word =>
    <WordCard
      front={word.front}
      back={word.back}
      key= {word.front} />
  );

  return (
    <div className="App">
      <header className="App-header">
        Dictionary App
      </header>
      <main>
        <WordForm />
        <CardsContainer cardList={cardList} />
     
      </main>
    </div>
  );
}

export default App;