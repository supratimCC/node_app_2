const express = require('express')
const app = express()
const port = 9000

app.get('/', (req, res) => res.send('Hello World!'))
app.get('/one/:id', (req, res) => res.send('Hello one'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))