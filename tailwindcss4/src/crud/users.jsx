//stores functions for interacting with user Accounts including creating and changing details
import axios from "axios"
const baseURL = import.meta.env.VITE_BASE_URL

export const createClientAccount = async({email,password,accountType})=>{
    const response = axios.post(`${baseURL}/accounts/account/register`,{email,password,accountType})
    return response
}

export const createServiceAccount = async({firstNames,surname,telephone,email,password,accountType}) => {
    const response = axios.post(`${baseURL}/accounts/account/register`,{firstNames,surname,telephone,email,password,accountType})
    return response
}

export const accountLogin = async({email,password}) => {
    const response = await axios.post(`${baseURL}/accounts/account/login`,{email,password})
    return response
}