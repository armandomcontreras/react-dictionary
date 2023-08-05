import './App.css';
import WordCard from './components/WordCard/WordCard';
import { useState } from 'react';

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
        <section className="card-form">
          <h2>New Card</h2>
          <form action="#" method="GET">
            <div className="form-row">
              <label>
                English:
                <input type ="text" name="en" placeholder="English"/>
              </label>
            </div>
            <div className="form-row">
              <label>
                German:
                <input type ="text" name="de" placeholder="German"/>
              </label>
            </div>
          </form>
        </section>
        <section className="cards-container">
          {cardList}
          </section>
      </main>
    </div>
  );
}

export default App;