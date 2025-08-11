import {createContext,useContext,useState} from "react"
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
import { VscDashboard } from "react-icons/vsc";
import { SlUser } from "react-icons/sl";
import { IoBuildOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { GoBriefcase } from "react-icons/go";
import { MdOutlineTravelExplore } from "react-icons/md";



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
        },
        {
            icon:<VscDashboard className={'inline'}/>
        },
        {
            icon:<SlUser className={'inline'}/>
        },
        {
            icon:<IoBuildOutline className={'inline'}/>
        },
        {
            icon:<GoBriefcase className={'inline'}/>

        },
        {
            icon:<CiLogout className={'inline'}/>
        },
        {
            icon:<MdOutlineTravelExplore className={'inline text-[1.2rem]'}/>
        }
    ]
    })

    const [jwtToken,setJwtToken] = useState(JSON.parse(localStorage.getItem("jwtToken")) || null)
    const [expIn,setExpIn] = useState(JSON.parse(localStorage.getItem("expIn") || null))
    const [accountType,setAccountType] = useState(JSON.parse(localStorage.getItem('account_type')) || null)


    //shared state amongst all components and pages of the application
    //made it an object to avoid repeating some parts of code especially navlinks and icon importing

    return (
        <MyContext.Provider value={[value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType]}>
            {children}
        </MyContext.Provider>   
    )
}

export default Context