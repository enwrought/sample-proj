export const STATE = {
  HIDDEN: '*',
  EMPTY: ' ',
  FLAGGED: '^',
  NUMBER: '#'
};

function replaceNumbers(row) {
  // TODO: replace numbers, just returning string for now
  return row.join('');
}

export default class Board {
  /**
   * @param {int} size - length of square board
   */
  constructor(size = 10, numBombs = 3, entries) {
    this._size = size;
    this._numBombs = 3;

    this._bombs = Board.placeRandomBombs(this._size, this._numBombs);

    if (entries) {
      this._entries = entries;
      return;
    }
    // this._entries[x][y]
    const tmp = Array.from(Array(this._size));
    this._entries = tmp.map(() => Array.from(Array(this._size).fill(STATE.HIDDEN)));
  }

  static placeRandomBombs(size, numBombs) {
    // TODO: randomize
    return [[1,3], [2,2], [4,5]];
  }

  endGame() {
    // TODO
  }
  


  flag(x, y) { return this._entries[x][y] = STATE.FLAGGED; }
  
  isFlagged(x, y) { return this._entries[x][y] === STATE.FLAGGED; }

  unflag(x, y) {
    // TODO check if should be STATE.HIDDEN?
    if (isFlagged(x, y)) {
      this._entries[x, y] = STATE.HIDDEN;
    }
  }

  canGuess(x, y) { return this._entries[x][y] === STATE.HIDDEN; }

  guess(x, y) {
    if (canGuess(x, y)) {
      if (this._bombs.find(coord => coord[0] === x && coord[1] === y)) {
        endGame();
      } else {
        updateBoard(x, y);
      }
    }
  }

  print() {
    return this._entries.map(replaceNumbers).join('\n');
  }
}
