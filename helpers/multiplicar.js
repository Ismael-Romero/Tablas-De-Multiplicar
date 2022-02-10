const fs = require('fs');

const createFile = ( base, limit = 10, list) => {
    return new Promise( (resolve, reject) => {

        let output = ''; 
        let outputFile = './output/table-of-';

        for(let i = 0; i <= limit; i++){
            output += `${base} x ${i} = ${base*i}\n`;
        }

        if(list){ console.log(output) } 

        (limit > 10) 
            ? outputFile += `${base}-x-${limit}.txt`
            : outputFile += `${base}.txt`;
        
        fs.writeFileSync(outputFile, output)

        resolve(outputFile)
        reject('Could not create file');
    });
};

module.exports = { createFile };