//stores function for performing a multi fields querying
import axios from "axios"
const baseURL = import.meta.env.VITE_BASE_URL

export const queryService = async({searchTerm,skip,limit,category,minFilter,midFilter,highFilter,maxFilter}) => {
  
    const services = axios.get(`${baseURL}/services/search-all?searchTerm=${searchTerm}&skip=${skip}&limit=${limit}&category=${category}&minFilter=${minFilter}&midFilter=${midFilter}&highFilter=${highFilter}&maxFilter=${maxFilter}`)
    return services
}

