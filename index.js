const express = require('express')
const app = express()
const port = 9000

const UserController = require('./app/Controllers/UserCon')

app.get('/', UserController.testCon )
app.get('/one/:id', (req, res) => res.send('Hello one'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))