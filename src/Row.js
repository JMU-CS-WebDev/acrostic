import {useState} from 'react';
import './Row.css';

export function Row(props) {
  const {letter} = props;

  return (
    <div className="row">
      <span className="letter">
        {letter}
      </span>
      <input
        id="input"
        type="text"
      />
    </div>
  );
}
