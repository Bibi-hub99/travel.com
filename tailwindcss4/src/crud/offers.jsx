import axios from "axios"

const baseURL = import.meta.env.VITE_Base_URL
import {defer} from "react-router-dom"

//handles offer related http requests to the server and response form the server

export const findOffers = async() => {
    const offers = axios.get(`http://localhost:8888/offers`)
    return defer({offers:offers})//returing results in defer mode for rendering other parts of the application immediately excepts those needing them
}