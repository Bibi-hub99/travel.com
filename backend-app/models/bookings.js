const mongoose = require("mongoose")

const bookingSchema = new mongoose.Schema({

    userID:{type:String,required:true},
    serviceID:{type:String,required:true},
    bookedAt:{type:Date,required:true,default:Date.now()}
})

const bookingModel = mongoose.model("bookings",bookingSchema,"bookings")
module.exports = bookingModel