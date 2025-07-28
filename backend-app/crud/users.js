const userModel = require("../models/users")
const {createPassHash,comparePassHash} = require("../utils/password-utils")
const {createPayload} = require("../jwt-token/jwt-issuer")

const createUserAccount = async(req,res,next) => {

    try{

        const {accountType,email,password} = req.body
        console.log(password)
        const passHash = await createPassHash(password,10)
        const userAccount = {
            accountType,
            email,
            passHash
        }
        
        if(accountType === "service_provider"){
            const {firstNames,surname,telephone} = req.body
            userAccount.firstNames = firstNames
            userAccount.surname = surname
            userAccount.telephone = telephone
        }
        
        const newUser = new userModel(userAccount)
        const savedUser = await newUser.save()
        res.status(200).json({success:true})

    }catch(err){
        next(err)
    }

}

//handles user login logic and jwt assignment
const userLogin = async(req,res,next) => {

    try{

        const {email,password} = req.body
        const userAccount = await userModel.findOne({email:email})
        
        if(!userAccount){
            //call error if no account matches
            next(new Error("account not found, wrong credentials!"))
        }else{
            //handling hash comparing logic
            const isValid = await comparePassHash(password,userAccount.passHash)
            if(isValid){
                const payload = createPayload(userAccount)
                return res.status(200).json({success:true,payload:payload})
            }else{
                next(new Error("incorrect login in credentials!"))
            }
        }
        
    }catch(err){
        next(err)
    }

}

module.exports = {createUserAccount,userLogin}