//stores functions for interacting with user Accounts including creating and changing details
import axios from "axios"
const baseURL = import.meta.env.VITE_BASE_URL

export const createClientAccount = async({email,password,accountType})=>{
    const response = axios.post(`${baseURL}/accounts/account/register`,{email,password,accountType})
    return response
}

export const createServiceAccount = async({firstNames,surname,telephone,email,password,accountType,id_number,gender}) => {
    const response = axios.post(`${baseURL}/accounts/account/register`,{firstNames,surname,telephone,email,password,accountType,id_number,gender})
    return response
}

export const accountLogin = async({email,password}) => {
    const response = await axios.post(`${baseURL}/accounts/account/login`,{email,password})
    return response
}

export const findAccountType = async(jwtToken) => {
    const response = await axios.get(`${baseURL}/protected/accounts/account/accountType`,{headers:{Authorization:jwtToken}})
    return response
}

export const getProfileInformation = async(jwtToken) => {
    const response = await axios.get(`${baseURL}/protected/accounts/account/profile-information`,{headers:{Authorization:jwtToken}})
    return response
}

export const updateInformation = async ({jwtToken,...updateObj}) => {
    console.log(updateObj)
    const response = await axios.put(`${baseURL}/protected/accounts/account/update-information`,{...updateObj},{headers:{Authorization:jwtToken}})
    return response
}