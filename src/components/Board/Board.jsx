import React from 'react';
import Generate from '../Generate'

import './Board.css';


const Board = () => {
  let n = 9;
  return (
    <div>
      <Generate n={n}/>
    </div>
  )
}

export default Board
