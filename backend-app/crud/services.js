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

const searchServices = async(req,res,next) => {
    try{

        const queryObj = {}

        const {searchTerm} = req.query

        if(req.query.category){
            if(req.query.category !=="undefined" && req.query.category !== undefined){
                queryObj.category = {$eq:req.query.category}
            }
        }

        queryObj.$text = {$search:`\"${searchTerm}\"`}
        const services = await serviceModel.searchServices(queryObj)
        res.status(200).json({success:true,services:services})


    }catch(err){
        next(err)
    }
}

const findSingleService = async(req,res,next)=>{

    try{

        const {serviceID} = req.params
        const service = await serviceModel.findSingleService(serviceID)
        res.status(200).json({success:true,service:service})

    }catch(err){
        console.log(err)
        next(err)
    }

}

const queryServices = async(req,res,next) => {
    try{

        const queryObj = {}
        queryObj.$text = {$search: `\"${req.query.searchTerm}\"`}
        const filterArr = []

        const categoryProv = req.query.category !== "undefined" && req.query.category !== undefined && req.query.category !== null && req.query.category !== "null"
        
        if(categoryProv){
            queryObj.category = {$eq:req.query.category}
        }

        const queryDB = serviceModel.find(queryObj)

        if(req.query.minFilter === "true"){
            filterArr.push({price:{$gte:0,$lte:1000}})
        }

        if(req.query.midFilter === "true"){
            filterArr.push({price:{$gte:1001,$lte:2000}})
        }

        if(req.query.highFilter === "true"){
            filterArr.push({price:{$gte:2001,$lte:3000}})
        }

        if(req.query.category === "true"){
            filterArr.push({price:{$gte:3001}})
        }

        const refactor = {
            $or:filterArr
        }

        const services = await queryDB.find(refactor)

        res.status(200).json({success:true,services:services})

    }catch(err){
        console.log(err)
        next(err)
    }
}

module.exports = {findServices,findByCategory,searchServices,findSingleService,queryServices}
