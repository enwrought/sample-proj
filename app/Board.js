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
  constructor(size = 10) {
    this._size = size;

    // this._entries[x][y]
    const tmp = Array(this._size);
    this._entries = tmp.map(() => Array(this._size).fill(STATE.HIDDEN));
  }

  print() {
    this._entries.map(replaceNumbers).join('');
  }
}
