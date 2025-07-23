const express = require("express")
<<<<<<< HEAD
const {findServices,findByCategory} = require("../crud/services")
=======
const {findServices} = require("../crud/services")
>>>>>>> 13e4cc9baf2b264211d2851db4edc10a43ffb5a4

/*
handles routes which begins with services by assigning middlewares to matching routes
 */

const ServiceRouter = express.Router()

ServiceRouter.get("/",findServices)
<<<<<<< HEAD
ServiceRouter.get("/categories",findByCategory)
=======
>>>>>>> 13e4cc9baf2b264211d2851db4edc10a43ffb5a4

module.exports = ServiceRouter