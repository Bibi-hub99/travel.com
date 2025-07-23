import {createContext,useContext,useState,useEffect} from "react"
import moment from "moment"
import { IoIosSearch } from "react-icons/io";
import { HiBars3 } from "react-icons/hi2";
import { IoIosHome } from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";
import { TbSettingsUp } from "react-icons/tb";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { FaHouse } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import { FaBusAlt } from "react-icons/fa";
import { TbBuildingCircus } from "react-icons/tb";
import { FaPlaneDeparture } from "react-icons/fa";
import { FaPlaneArrival } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaEye } from "react-icons/fa";



const MyContext = createContext()


export const useMyContext = ()=>{
    return useContext(MyContext)
}

function Context({children}){

    const [value,setValue] = useState({
        navLinks:[
            {
            id:1,
            title:'about',
            url:'about-us'
        },
        {
            id:2,
            title:'booking',
            url:'booking'
        },
        {
            id:3,
            title:'blogs',
            url:'blogs'
        },
        /*{
            id:4,
            title:<FaUserCircle className={'inline'}/>,
            url:'login'
        }*/
    ],
    containerStyle:'w-[98%] m-auto',//for styling width in components giving them a 98% and aligning them equally,
    universaltMt:"mt-20",
    icons:[
        {
            icon:<IoIosSearch className={'inline'}/>,
        },
        {
            icon:<HiBars3 className={'inline'}/>
        },
        {
            icon:<IoIosHome className={'inline'}/>
        },
        {
            icon:<FaUserCircle className={'inline'}/>
        },
        {
            icon:<FaUserCheck className={'inline'}/>
        },
        {
            icon:<IoIosArrowBack className={'inline'}/>   
        },
        {
            icon:<IoIosArrowForward className="inline"/>

        },
        {
            icon:<FaHouse className={'inline text-[1.5rem]'}/>
        },
        {
            icon:<IoAirplane className={"inline text-[1.5rem]"}/>
        },
        {
            icon:<FaBusAlt className={"inline text-[1.5rem]"}/>
        },
        {
            icon:<TbBuildingCircus className={"inline text-[1.5rem]"}/>
        },
        {
            icon:<FaPlaneDeparture className={'inline'}/>
        },
        {
            icon:<FaPlaneArrival className={'inline'}/>
        },
        {
            icon:<FaHeart className={'inline'}/>
        },
        {
            icon:<FaEye className={'inline'}/>
        }
    ],
    jwtToken:JSON.parse(localStorage.getItem("jwtToken")),
    expireIn:JSON.parse(localStorage.getItem("expireIn"))
    })

    const LogOut = () =>{
        localStorage.removeItem("jwtToken")
        localStorage.removeItem("expireIn")
    }

    const isLoggedIn = ()=>{

        const expireIn = value.expireIn
        const expireInMoment = moment(expireIn)

        const isExpired = moment().isBefore(expireInMoment)
        return isExpired

    }

    //shared state amongst all components and pages of the application
    //made it an object to avoid repeating some parts of code especially navlinks and icon importing

    return (
        <MyContext.Provider value={[value,LogOut,isLoggedIn]}>
            {children}
        </MyContext.Provider>
    )
}

export default Context