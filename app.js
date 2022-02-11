const { createFile } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();
console.log('|---------------------------------|');
console.log(`| Multiplication table of ${argv.b} x ${argv.l} |`);
console.log('|---------------------------------|');

createFile(argv.b, argv.l, argv.s)
    .then( fileName => console.log(colors.green(fileName,' File Created')))
    .catch( err => console.log(colors.red(err)));
