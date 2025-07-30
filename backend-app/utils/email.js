//sends emails for notifications about bookings and more
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

    service:"gmail",
    host:"smtp.gmail.com",
    port:587,
    secure:false,
    auth:{
        user:process.env.GOOGLE_EMAIL_ACCOUNT,
        pass:process.env.GOOGLE_EMAIL_PASSWORD
    }

})

const sendMail = async (mailOptions)=>{
    const response = await transporter.sendMail(mailOptions)
    return response
}

module.exports = {sendMail}