const express = require("express")

const {findServices,findByCategory,searchServices,findSingleService} = require("../crud/services")


/*
handles routes which begins with services by assigning middlewares to matching routes
 */

const ServiceRouter = express.Router()

ServiceRouter.get("/",findServices)
ServiceRouter.get("/categories",findByCategory)
ServiceRouter.get('/search',searchServices)
ServiceRouter.get("/service/:serviceID",findSingleService)

module.exports = ServiceRouter