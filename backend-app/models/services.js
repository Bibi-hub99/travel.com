const mongoose = require('mongoose')
//model for perfoming read and writes on database on services collections



const serviceSchema = new mongoose.Schema({
    title:{type:String,required:true,unique:true},
    providerID:{type:String,required:true},
    imageURL:{type:String,required:true,unique:true},
    description:{type:String,required:true},
    category:{type:String,required:true},
    price:{type:Number,required:true},
    location:{
        country:String,
        city:String
    },
    uniqueFeatures:{

    }
})

serviceSchema.statics.findByCategory = async function findByCategory(queryObj){
    const services = await this.find(queryObj)
    return services
}

serviceSchema.statics.searchServices = async function searchServices(queryObj){
    const services = await this.find(queryObj)
    return services
}

serviceSchema.statics.findSingleService = async function findSingleService(id){
    const service = await this.findById(id)
    return service
}

const serviceModel = mongoose.model("services",serviceSchema,"services")

module.exports = serviceModel