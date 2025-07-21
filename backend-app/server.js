const ConnectDB = require("./database/connect")
const express = require("express")
const OfferRouter = require("./routes/offer")
const cors = require('cors')

require("dotenv").config({quiet:true})

ConnectDB()

const app = express()

app.use(cors())

app.use('/offers',OfferRouter)

app.listen(8888,()=>console.log('started listening on port 8888....'))