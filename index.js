require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

const AuthRouter = require('./Routes/Auth/AuthRoute')

app.use(AuthRouter)

app.listen(port, () => console.log(`Example app listening on port ${port}!`))