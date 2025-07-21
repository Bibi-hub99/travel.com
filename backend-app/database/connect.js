const mongoose = require("mongoose")

async function ConnectDB(){
    try{
        await mongoose.connect(process.env.mongoURL)
        console.log('mongodb connected successfully')
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}

module.exports = ConnectDB