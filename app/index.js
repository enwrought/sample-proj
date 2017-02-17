import readline from 'readline';
import util from 'util';
import Board from './Board';

const VALID_COMMANDS = {
  FLAG: 'flag',
  GUESS: 'guess'
};

/**
 * @param {string} cmd - command from stdin
 * @return {array} commands if 3 words, first in VALID_COMMANDS and next two are ints < 10,
 *     otherwise, null
 */
function isValidCommand(cmd) {
  const splitWords = cmd.split(' ');
  if (splitWords.length !== 3) {
    return null;
  }
  const validFirst = splitWords[0] === VALID_COMMANDS.FLAG || 
    splitWords[0] === VALID_COMMANDS.GUESS;
  const x = parseInt(splitWords[1]);
  const y = parseInt(splitWords[2]);
  const intsLessThan10 = x !== NaN && x >= 0 && x <= 10 &&
    y !== NaN && y >= 0 && y <= 10;
  if (validFirst && intsLessThan10) {
    return [splitWords[0], x, y];
  }
  return null;
}

console.log('Starting game');

process.stdin.resume();
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const board = new Board();

rl.on('line', cmd => {
  console.log('You just typed: '+cmd);

  if (board.lost()) {
    console.log('Game over!');
    process.exit();
  } else if (board.won()) {
    console.log('You won!');
    process.exit();
  }
  console.log(board.print());

  if (cmd === 'quit') {
    console.log('Exiting...');
    process.exit();
  } else {
    const commands = isValidCommand(cmd);
    if (commands) {
      const [cmd, x, y] = commands;
      switch(cmd) {
        case VALID_COMMANDS.FLAG:
          board.flag(x, y);
          break;
        case VALID_COMMANDS.GUESS:
          board.guess(x, y);
          break;
        default:
          console.log(`Invalid command "${cmd}".`);
      }
    } else {
      console.log('Invalid commands.  arg x y, where arg = flag or guess.');
    }
  }
});
