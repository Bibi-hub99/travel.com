//slider menu for service provider layout
//visible only for service provider user

import { IoCloseSharp } from "react-icons/io5";
import Button from "../components/button"
import {NavLink} from "react-router-dom"
import {useMyContext} from "../context/context"

function SliderMenu(props){

    const [value] = useMyContext()
    

    const sliderStyle = {
        width:'50%',
        height:'100%',
        left:''
    }

    //style slide element and handles its width based on props from parent component state
    const parentStyle = {
        width:props.slideWidth,
        backgroundColor:'rgba(0,0,0,0.8)',
        height:'100vh',
        zIndex:'30',
        left:'0',
        overflow:'hidden'
    }

    const allLink = 'block text-[1.8rem] text-center rounded-xl mb-2 p-1 box-border w-[98%] m-auto'
    const activeLink = 'bg-blue-400 text-black '+allLink
    const inActiveLink = 'hover:bg-gray-200 text-gray-400 '+allLink

    const isActive = ({isActive}) => isActive ? activeLink:inActiveLink

    return (

        <div className={`md:hidden duration-100 fixed top-0`} style={parentStyle}>

            <div className={'relative bg-white mr-auto pt-14 box-border left-0'} style={sliderStyle}>

                <Button
                handleClick={()=>
                props.toggleSlideWidth(0)}
                btnInnerText={<IoCloseSharp className={'inline'}/>}
                btnStyle={'absolute top-1 right-1 text-[1.3rem] hover:bg-gray-400 cursor-pointer rounded-xl p-2'}
                btnType={'button'}/>

                <div>

                    <NavLink className={isActive} to={'.'} end onClick={()=>props.toggleSlideWidth(0)}>{value.icons[15].icon}</NavLink>
                    <NavLink className={isActive} to={'profile?page=profile'} onClick={()=>props.toggleSlideWidth(0)}>{value.icons[16].icon}</NavLink>
                    <NavLink className={isActive} to={'adminstrator?page=adminstration'} onClick={()=>props.toggleSlideWidth(0)}>{value.icons[17].icon}</NavLink>
                    <NavLink className={isActive} to={'my-services?page=my services'} onClick={()=>props.toggleSlideWidth(0)}>{value.icons[18].icon}</NavLink>
                    
                </div>

            </div>



        </div>
    )

}

export default SliderMenu