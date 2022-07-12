import './App.css';
import { useState } from 'react';
import { Row } from './Row';

function App() {
  const [letters, setLetters] = useState('');

  return (
    <div className="App">
      <input
        id="seedWord"
        type="text"
        onChange={e => setLetters(e.target.value)}
      />
      {
        letters.split('').map(letter =>
          <Row
            letter={letter}
          />
        )
      }
    </div>
  );
}

export default App;