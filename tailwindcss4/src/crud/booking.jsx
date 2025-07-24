//handles requests and responses for booking page

import axios from "axios"
import {defer} from "react-router-dom"
const baseURL = import.meta.env.VITE_BASE_URL


export const findServices = async()=>{
    const services = axios.get(`${baseURL}/services`)
    return defer({services:services})
}

export const findByCategory = async(category)=>{
    const services = axios.get(`${baseURL}/services/categories?category=${category}`)
    return services
}

export const searchService = async(searchTerm,category) => {
    const services = axios.get(`${baseURL}/services/search?searchTerm=${searchTerm}&category=${category}`)
    return services
}

export const findSingleService = async(serviceID) => {
    const service = axios.get(`${baseURL}/services/service/${serviceID}`)
    return service
}