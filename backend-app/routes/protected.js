//handles protected routes interaction with the db
const passport = require("passport")
const serviceModel = require("../models/services")
const {makeBooking} = require("../crud/bookings")

const express = require("express")

const ProtectedRouter = express.Router()

ProtectedRouter.get("/booking/service/:serviceID",passport.authenticate("jwt",{session:false,failureRedirect:"../../../not-authenticated"}),async(req,res)=>{
    try{

        const {serviceID} = req.params
        const {jwtToken} = req.body
        console.log(jwtToken)
        console.log(req.user)

        const service = await serviceModel.findById(serviceID)
        res.status(200).json({success:true,service:service})

    }catch(err){
        console.log(err)
    }
})

ProtectedRouter.put("/booking/service/:serviceID",passport.authenticate("jwt",{session:false,failureRedirect:'../../../not-authenticated'}),makeBooking)

module.exports = ProtectedRouter