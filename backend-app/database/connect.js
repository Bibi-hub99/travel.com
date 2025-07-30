const mongoose = require("mongoose")


async function ConnectDB(){
    try{
        const connection = await mongoose.connect(process.env.MONGOURL)
        console.log('mongodb connected successfully')
        return connection
    }catch(err){
        console.log(err)
        process.exit(1)
    }
}


module.exports = ConnectDB