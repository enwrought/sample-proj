import readline from 'readline';
import util from 'util';

process.stdin.resume();
process.stdin.setEncoding('utf8');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', line => {
  console.log(`You typed ${cmd}`);
  console.log('Exiting...');
  process.exit();
});
