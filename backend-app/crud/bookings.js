//handles backend logic for making bookings for a service
const bookingModel = require("../models/bookings")
const serviceModel = require("../models/services")
const {sendMail} = require("../utils/email")

const makeBooking = async (req,res,next) => {

    try{

        const {serviceID} = req.params
        const {jwtToken} = req.body
        //console.log(jwtToken)
        //console.log(req.user)


        const serviceToBook = await serviceModel.findById(serviceID,{_id:1,price:1,category:1})

        const bookingObj = {
            //userID:req.user_id,
        }

        const userID = String(req.user._id)

        if(serviceToBook.category === "stays" || serviceToBook.category === "activities"){
            bookingObj.$push = {
                bookings_information:{
                    userID:userID,
                    uniqueFeatures:{
                        checkIn:'2025-07-01',
                        checkOut:'2025-10-20'
                    }
                }
            }
        }

        if(serviceToBook.category === "buses" || serviceToBook.category === "flights"){

            bookingObj.$push = {

                bookings_information:{
                    userID:userID
                }

            }

        }

        await bookingModel.updateOne({serviceID:serviceID},bookingObj,{upsert:true})

        const response = await sendMail({

            from:process.env.GOOGL_EMAIL_ACCOUNT,
            to:`${req.user.email}`,
            subject:"Booking Confirmation",
            html:
            `<p style={'font-weight:bolder'}>
                Your booking for service ${serviceToBook._id} was made successful for more information
                email us or contact 083 353 7975
            </p>
            <br></br>s

            `
            
        })
        //console.log(response)
        res.status(200).json({success:true})

    }catch(err){
        console.log(err)
    }

}

module.exports = {makeBooking}