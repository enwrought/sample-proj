import readline from 'readline';
import Board from './Board';

console.log('Starting game');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let size;
rl.question('Enter the size of board >', enteredValue => {
  size = enteredValue;
});

const board = new Board(size);
console.log(board.print());
