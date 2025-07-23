import {NavLink} from "react-router-dom"
import {useMyContext} from "../context/context"

//navbar for the categories page lists buses,houses and airplanes for booking

function CategoryNav(){

    const [value] = useMyContext()

    const allLink = 'px-4 py-2 rounded-lg mr-2'
    const activeLink = 'bg-blue-500 text-white '+allLink
    const inActiveLink = 'bg-gray-300 hover:bg-gray-400 '+allLink

    const checkState = ({isActive}) => isActive ? activeLink:inActiveLink

    return (
        <div className={'bg-gray-200 py-3 px-1 box-border rounded-xl'}>
            <NavLink to={'..'} relative={'path'} className={`${allLink} hover:bg-gray-500`}>Back</NavLink>
            <NavLink className={checkState} to={'.'} end>{value.icons[7].icon}</NavLink>
            <NavLink className={checkState} to={'flights'}>{value.icons[8].icon}</NavLink>
            <NavLink className={checkState} to={'buses'}>{value.icons[9].icon}</NavLink>
            <NavLink className={checkState} to={'activities'}>{value.icons[10].icon}</NavLink>
        </div>
    )

}

export default CategoryNav