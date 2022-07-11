import './App.css';
import {useState} from 'react';
import { Row } from './Row';

const letters = [{letter: "f"} , {letter: "i"}, {letter: "g"}];
const rows = [{letter: "l"}, {letter: "e"}, {letter: "t"}];

function App() {
  const [letters, setLetters] = useState('');
  // const addLetter = newLetter => {
  //   setLetters([
  //     newLetter,
  //     ...letters
  //   ]);
  // };

  return (
    <div className="App">
      <input
        id="seedWord"
        type="text"
        onChange={e => setLetters(e.target.value)}
      />
      <span>{letters}</span>
      {/* {
        letters.map(letter =>
          <Row
            letter ={letter}
          />
        )
      } */}

      {/* <Row letter={letters.charAt(1)}/> */}
    </div>
  );
}

export default App;