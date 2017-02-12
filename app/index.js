import readline from 'readline';
import example from './example';

console.log(`Example: ${JSON.stringify(example)}`);

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Text before readline >', function (enteredValue) {
  console.log('Entered value: ' + enteredValue);
});
