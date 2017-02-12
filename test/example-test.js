import example from '../app/example';
import { expect } from 'chai';

describe('example.js', () => {
  it('Correct value', () => {
    expect(example).to.deep.equal({exampleKey: 'value'});
  });
});
