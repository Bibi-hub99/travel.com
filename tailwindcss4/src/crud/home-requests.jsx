import axios from "axios"

const baseURL = import.meta.env.VITE_BASE_URL
import {defer} from "react-router-dom"

//handles offer related http requests to the server and response form the server
//hand homepage requests, request made on home page

const findOffers = ()=>{
    return axios.get(`${baseURL}/offers`)
}

const findDestinations =  () =>{
    return axios.get(`${baseURL}/locations`)
}

export const homeRequests = () => {

    const results = Promise.all([
        findOffers(),findDestinations()
        //axios.get(`http://localhost:8888/offers`),
        //axios.get(`http://localhost:8888/locations`)
    ])
   //const results = axios.get(`http://localhost:8888/offers`)

    return defer({results:results})//returing results in defer mode for rendering other parts of the application immediately excepts those needing them

}

