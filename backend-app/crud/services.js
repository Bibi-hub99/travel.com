const serviceModel = require("../models/services")

//middlewares for services request and database queries

const findServices = async(req,res,next) => {
    try{
        const services = await serviceModel.find({})
        res.status(200).json({success:true,services:services})
    }catch(err){
        next(err)   
    }
}

<<<<<<< HEAD
const findByCategory = async(req,res,next) => {
    try{
        const queryObj = {}
        const {category} = req.query
        queryObj.category = {$eq:category}
        const services = await serviceModel.findByCategory(queryObj)
        res.status(200).json({success:true,services:services})
    }catch(err){
        next(err)
    }
}

module.exports = {findServices,findByCategory}
=======
module.exports = {findServices}
>>>>>>> 13e4cc9baf2b264211d2851db4edc10a43ffb5a4
