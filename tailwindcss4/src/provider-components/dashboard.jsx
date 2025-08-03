//returns a dashboard for navigating within routes and pages
import {NavLink} from "react-router-dom"
import {useMyContext} from "../context/context"

function Dashboard(){

    const [value] = useMyContext()
    const hrStyle = 'h-[.1rem] bg-gray-200 border-none'

    const allLink = 'block text-[1.8rem] text-center rounded-xl mb-2 p-1 box-border'
    const activeLink = 'bg-blue-400 text-black '+allLink
    const inActiveLink = 'hover:bg-gray-200 text-gray-400 '+allLink

    const isActive = ({isActive}) => isActive ? activeLink:inActiveLink

    return (
        <div className={'fixed top-0 w-[10%] h-full hidden md:block lg:w-[8%]'}>
            <div className={'h-[11%] xl:h-[10%]'} style={{backgroundColor:'rgba(0,0,0,0.2)'}}>

            </div>
            <div className="bg-white h-[90%] shadow-gray-300 shadow-xl pt-3 px-2 box-border">
                <br></br>
                <hr className={hrStyle}></hr>

                <br></br>
                <div>
                    <NavLink className={isActive} to={'.'} end>{value.icons[15].icon}</NavLink>
                    <NavLink className={isActive} to={'profile?page=profile'}>{value.icons[16].icon}</NavLink>
                    <NavLink className={isActive} to={'adminstrator?page=adminstration'}>{value.icons[17].icon}</NavLink>
                    <NavLink className={isActive} to={'my-services?page=my services'}>{value.icons[18].icon}</NavLink>

                </div>
                <br></br>
                <hr className={hrStyle}></hr>
                <br></br>
                <div>
                    <NavLink className={isActive} to={'logout'}>{value.icons[19].icon}</NavLink>
                </div>
            </div>
        </div>
    )

}

export default Dashboard