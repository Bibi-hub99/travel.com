//handles protected routes interaction with the db
const passport = require("passport")
const serviceModel = require("../models/services")

const express = require("express")

const ProtectedRouter = express.Router()

ProtectedRouter.get("/booking/service/:serviceID",passport.authenticate("jwt",{session:false,failureRedirect:"../../../not-authenticated"}),async(req,res)=>{
    try{

        const {serviceID} = req.params
        console.log(serviceID)
        //const service = await serviceModel.findById(serviceID)
        res.status(200).json({success:true,service:"demo"})

    }catch(err){
        console.log(err)
    }
})

module.exports = ProtectedRouter