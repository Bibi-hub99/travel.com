import {NavLink} from "react-router-dom"
import {useMyContext} from "../context/context"

function BookingNav(){

    const [value] = useMyContext()

    const allLink = 'px-4 py-2 rounded-lg mr-2'
    const activeLink = 'bg-blue-500 '+allLink
    const inActiveLink = 'bg-gray-300 '+allLink

    return (
        <div className={`bg-gray-200 py-3 px-1 box-border rounded-xl`}>

            <NavLink to={'.'} relative={'path'} className={({isActive}) => isActive ? activeLink:inActiveLink}>All</NavLink>
            <NavLink to={'categories'} relative={'path'} className={({isActive}) => isActive ? activeLink:inActiveLink}>Categories</NavLink>
            <NavLink to={'locations'} relative={'path'} className={({isActive}) => isActive ? activeLink:inActiveLink}>Destinations</NavLink>

        </div>
    )

}

export default BookingNav