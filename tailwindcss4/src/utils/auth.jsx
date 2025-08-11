import moment from "moment"

//function for checking if the jwt has not expired before granting access to a page for user to access

export const isLoggedIn = (expIn) => {

    //const expireIn = JSON.parse(localStorage.getItem("expireIn"))

    const expireInMoment = moment(expIn)
    const isExpired = moment().isBefore(expireInMoment)    
    console.log(expireInMoment)
    return isExpired

}
