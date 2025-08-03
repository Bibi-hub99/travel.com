//handles protected routes interaction with the db
const passport = require("passport")
const serviceModel = require("../models/services")
const {makeBooking} = require("../crud/bookings")
const {findAccountType,getProfileInformation} = require("../crud/users")
const {isClient,isServiceProvider} = require("../utils/authorization")

const express = require("express")

const ProtectedRouter = express.Router()

const notAuth1 = '../../../not-authenticated'

ProtectedRouter.get("/booking/service/:serviceID",passport.authenticate("jwt",{session:false,failureRedirect:notAuth1}),isClient,async(req,res)=>{
    try{

        const {serviceID} = req.params

        const service = await serviceModel.findById(serviceID)
        res.status(200).json({success:true,service:service})

    }catch(err){
        console.log(err)
    }
})

ProtectedRouter.get('/accounts/account/accountType',passport.authenticate('jwt',{session:false,failureRedirect:notAuth1}),findAccountType)

ProtectedRouter.get('/accounts/account/profile-information',passport.authenticate("jwt",{session:false,failureRedirect:notAuth1}),isServiceProvider,getProfileInformation)

ProtectedRouter.put("/booking/service/:serviceID",passport.authenticate("jwt",{session:false,failureRedirect:notAuth1}),makeBooking)

module.exports = ProtectedRouter