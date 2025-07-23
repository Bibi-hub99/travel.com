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

module.exports = {findServices}