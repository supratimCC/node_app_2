require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 9000

const { connectDB } = require('./app/DB/config/db')

// BODY PARSER 
const bodyParser = require('body-parser') 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// CORS
const cors = require('cors') 

var corsOptions = {
  origin: '*',
}

app.use(cors(corsOptions))

// ROUTES
const UserRouter = require('./Routes/Users/UserRouter')
const PermissionsRouter = require('./Routes/Premissions/PermissionsRouter')
const RolesRouter = require('./Routes/Roles/RolesRouter')
const AuthRoute = require('./Routes/Auth/AuthRoute')

app.use(UserRouter)
app.use(PermissionsRouter)
app.use(RolesRouter)
app.use(AuthRoute)


app.get('/', (req, res) => res.send('<h1>Welcome to User-Management starter kit. </h1>'))
connectDB().then(()=>{
  app.listen(port, () => console.log(`Example app listening on port ${port}!`))
});