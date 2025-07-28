//handles token generation for the user dynamically
const jsonwebtoken = require("jsonwebtoken")
const path = require("path")
const fs = require('fs')
//create a payload for the user login
//takes a document as an argument and extract id field for unique identification

const privateKey = fs.readFileSync(path.join(__dirname,'..','private-key.pem'),"utf8")

const createPayload = (user)=>{

    const {id} = user

    const expireIn = 1

    const payload = {
        sub:id,
        iat:Date.now()
    }

    const token = jsonwebtoken.sign(payload,privateKey,{algorithm:"RS256",expiresIn:'1d'})
    return {
        token:`Bearer ${token}`,
        expIn:expireIn
    }

}

module.exports = {createPayload}