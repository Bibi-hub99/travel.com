import moment from "moment"

export const isLoggedIn = () => {

    const expireIn = JSON.parse(localStorage.getItem("expireIn"))

    const expireInMoment = moment(expireIn)
    
    const isExpired = moment().isBefore(expireInMoment)
    return isExpired

}

export const getToken = () => {
    const token = JSON.parse(localStorage.getItem("jwtToken"))
    return token
}