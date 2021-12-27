const express = require('express')


const app = express()

app.get('/', (request, result) => {
    result.end('123')
})

app.listen(3000, () => {
    console.log('app server has started on port 3000 ...');
})