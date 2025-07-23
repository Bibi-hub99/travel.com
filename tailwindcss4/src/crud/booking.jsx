//handles requests and responses for booking page

import axios from "axios"
import {defer} from "react-router-dom"
const baseURL = import.meta.env.VITE_BASE_URL


export const findServices = async()=>{
    const services = axios.get(`${baseURL}/services`)
    return defer({services:services})
}