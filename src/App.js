import './App.css';
import {useState} from 'react';
import { Row } from './Row';

// const letters = [{letter: "f"} , {letter: "i"}, {letter: "g"}];

function App() {
  const [letters, setLetters] = useState([]);

  return (
    <div className="App">
      <input
        id="seedWord"
        type="text"
        onChange={e => setLetters(e.target.value,letters)}
      />
      <span>{letters}</span>
      {
        letters.map(letter =>
          <Row
            letter ={letter}
          />
        )
      }

      {/* <Row letter={letters.charAt(1)}/> */}
    </div>
  );
}

export default App;