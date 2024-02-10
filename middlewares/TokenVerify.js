const jwt = require('jsonwebtoken')

exports.tokenVerify = async (req, res, next)=>{
    
    jwt.verify(req.headers.token, process.env.TOKEN_KEY)
    next()
}