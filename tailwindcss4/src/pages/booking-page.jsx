import BookingNav from "../components/booking-navigation"
import {useMyContext} from "../context/context"
import {Outlet} from "react-router-dom"

//returns a booking page route
function BookingPage(){

    const [value] = useMyContext()

    return (
        <div className={`mt-18 w-[98%] ml-[1%]`}>
            <BookingNav/>
            <Outlet/>
        </div>
    )

}

export default BookingPage