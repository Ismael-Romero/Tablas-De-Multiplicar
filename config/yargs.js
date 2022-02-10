const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la multiplicación'
    })
    .option('l', {
        alias: 'limit',
        type: 'number',
        demandOption: false,
        describe: 'Establece un limite de la tabla de multiplicar'
    })
    .option('ls', {
        alias: 'list',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: 'Muestra en consola la tabla de multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)){
            throw 'La base tiene que ser un número';
        } 
        return true;
    })
    .argv

module.exports = argv;