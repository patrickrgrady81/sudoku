 const Generate = (props) => {
  let sudoku = new Sudoku(props.n).create();

  return (
    <div>
      <h1>{sudoku}</h1>
    </div>
  )
}

export default Generate

class Sudoku {
  constructor(n) {
    this.n = n;
  }
   checkSubgrid = (board, row, col, curr) => {
    let r = row - row % 3;
    let c = col - col % 3;
    for(let z = 0; z < this.n; z++)
    {
        if (board[r][c] === curr)
        {
            return false;
        }
    }
    return true;
  }

 checkCol = (board, row, curr) => {
    for(let z = 0;z < this.n; z++)
    {
        if (board[row][z] === curr)
        {
            return false;
        }
    }
    return true;
  }

 checkRow = (board, col, curr) => {
    for(let z = 0; z < this.n; z++)
    {
        if (board[z][col] === curr)
        {
            return false;
        }
    }
    return true;
  }

 isAllowed = (board, row, col, curr) => {
    return (this.checkRow(this.n, board, col, curr) && this.checkCol(this.n, board, row, curr) && this.checkSubgrid(this.n, board, row, col, curr))
  }

/////////////////////////////////////////////////////////////////////////////////

 initializeBoard = (n) => {
    return new Array(n).fill(0).map(()=> new Array(n).fill(0));
  }

 fillBoard = (board) => {
    for (let i = 0; i < this.n; i++){
        for (let j = 0; j < this.n; j++){
            if (board[i][j] === 0) {
                for (let curr = 1; curr <= this.n; curr++){
                    if (this.isAllowed(board, i, j, curr)){
                        board[i][j] = curr;
                        if (board[i][j] === 0) console.log(`row: ${j}, col: ${j}`);
                        if (this.fillBoard(board)){
                            return board;
                        } else {
                            board[i][j] = 0;
                        }
                    }
                }
            }
        }
    }
    return board;
  }

 create = (n) => {
  let board = this.initializeBoard(n);
  board = this.fillBoard(n, board);

  console.log(board);
  }
}