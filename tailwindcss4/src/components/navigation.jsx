import {NavLink} from "react-router-dom"
import {useMyContext} from "../context/context"

function Navigation(props){

    const [value,LogOut,isLoggedIn] = useMyContext()
    
    const isLogged = isLoggedIn()//checks if user is logged in and decide the links to route to

    const {navLinks,containerStyle,icons} = value //import of navlinks and width styling from global context api
    //also importing searchIcon and menuIcon

    /*
    component render navigation bar fixed to the top
     */

    //common style attributes of the search and menu Icon
    const btnStyle = 'text-[1.5rem] cursor-pointer '

    //common style of navlinks and active navlinks

    const commonStyle = 'w-[19%] text-center rounded-md py-2 text-white '
    const activeLink = commonStyle + 'bg-blue-700 block'
    const inActiveLink = commonStyle + 'hover:bg-blue-400 '

    const mapsLinks = navLinks.map((each)=>{
        return <NavLink to={each.url} className={({isActive}) => isActive ? activeLink:inActiveLink } key={`navbar-links ${each.id}`}>{each.title}</NavLink>
    })
    

    return (
        <div className={'bg-blue-500 py-2 rounded-b-md fixed w-[100%] top-0'} style={{zIndex:'20'}}>

            <div className={`${containerStyle} flex items-center justify-between`}>

                <div className={'w-[70%] md:w-[20%]'}>
                    <NavLink className={'text-2xl text-white text-shadow-black text-shadow-lg'} to={'.'}>Travel.com</NavLink>
                </div>

                <div className={'hidden md:flex w-[78%] px-5 box-border md:w-[70%] justify-between'}>
                    <NavLink to={'.'} className={({isActive}) => isActive ? activeLink:inActiveLink}>Home</NavLink>
                    {mapsLinks}
                    {
                        <NavLink to={isLogged ? 'account':'login'} className={({isActive}) => isActive ? activeLink:inActiveLink}>{isLogged ? icons[4].icon:icons[3].icon}</NavLink>
                    }
                </div>

                <div className={'w-[30%] text-end md:hidden'}>
                    <button className={`${btnStyle} mr-5`} onClick={()=>props.toggleForm(props.state)}>{icons[0].icon}</button>
                    <button className={`${btnStyle} mr-2`} onClick={()=>props.handleSlideWidth(100)}>{icons[1].icon}</button>                
                </div>

            </div>

        </div>
    )

}

export default Navigation