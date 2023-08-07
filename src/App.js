import React from 'react';


import WordForm from './components/WordCard/WordForm/WordForm';
import CardsContainer from './components/CardsContainer/CardsContainer';

import './App.css';

class App extends React.Component {
 state = {
    words: [
      { front: 'translation', back: 'ubersetzung' },
      { front: 'egg', back: 'Ei' },
      { front: 'taxi', back: 'Taxi' },
      { front: 'paper', back: 'Papier' },
      { front: 'square', back: 'Platz' },
    ],
    score: 0
  }


  addWord = (front, back) => {
    const newWords = [...this.state.words, { front, back }];
    this.setState({ words: newWords });
  }
  deleteWord = (front) => {
   const newWords = this.state.words.filter(word => word.front !== front);
   this.setState({ words: newWords });
  }
render() {
    return (
      <div className="App">
        <header className="App-header">
          Dictionary App
        </header>
        <main>
          <WordForm addWord={this.addWord} />
          <CardsContainer
            words={this.state.words}
            deleteWord={this.deleteWord} />
        </main>
      </div>
    );
  }
}

