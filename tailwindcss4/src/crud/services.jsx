//handles apis and http requests for services reads & writes operations

import axios from "axios"
const baseURL = import.meta.env.VITE_BASE_URL

export const addService = async({jwtToken,...serviceObj}) =>{

    const response = await axios.post(`${baseURL}/protected/services/add-service`,{...serviceObj},{headers:{Authorization:jwtToken}})
    return response
    
}

export const getServices = async (jwtToken,skip,limit)=>{
    const response = await axios.get(`${baseURL}/protected/services/provider-services?skip=${skip}&limit=${limit}`,{headers:{Authorization:jwtToken}})
    return response
}

export const updateService = async ({serviceID,jwtToken,...serviceObj}) => {
    const response = await axios.put(`${baseURL}/protected/services/update-service/${serviceID}`,{...serviceObj},{headers:{Authorization:jwtToken}})
    return response
}

export const deleteService = async ({serviceID,jwtToken}) => {
    const response = await axios.delete(`${baseURL}/protected/services/delete-service/${serviceID}`,{headers:{Authorization:jwtToken}})
    return response
}

export const addComment = async ({serviceID,comment,jwtToken}) => {
    const response = await axios.put(`${baseURL}/protected/services/add-comment/${serviceID}`,{comment},{headers:{Authorization:jwtToken}})
    return response
}

export const getProductData = async ({serviceID,jwtToken}) => {
    const response = await axios.get(`${baseURL}/protected/services/get-comments/${serviceID}`,{headers:{Authorization:jwtToken}})
    return response
}
