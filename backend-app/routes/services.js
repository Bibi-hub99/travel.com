const express = require("express")
const {findServices} = require("../crud/services")

/*
handles routes which begins with services by assigning middlewares to matching routes
 */

const ServiceRouter = express.Router()

ServiceRouter.get("/",findServices)

module.exports = ServiceRouter