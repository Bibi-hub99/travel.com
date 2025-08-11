//handles apis and http requests for services reads & writes operations

import axios from "axios"
const baseURL = import.meta.env.VITE_BASE_URL

export const addService = async({jwtToken,...serviceObj}) =>{

    const response = await axios.post(`${baseURL}/protected/services/add-service`,{...serviceObj},{headers:{Authorization:jwtToken}})
    return response
    
}

export const getServices = async (jwtToken)=>{
    const response = await axios.get(`${baseURL}/protected/services/provider-services`,{headers:{Authorization:jwtToken}})
    return response
}