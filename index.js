const fs = require('fs')

const data = `
123454654654654asdfsdfsdcvxcv
` 

fs.writeFileSync('nodejs.txt', data)

const result = fs.readFileSync('nodejs.txt', {encoding: 'utf-8'})

console.log(result);

console.log(__dirname);
console.log(__filename);