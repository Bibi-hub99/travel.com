//builds a mobile menu slider
import { IoCloseSharp } from "react-icons/io5";
import Button from "./button"
import {NavLink} from "react-router-dom"

function MenuSlider(props){

    const sliderStyle = {
        width:'50%',
        height:'100%',
    }

    const parentStyle = {
        width:props.slideWidth,
        backgroundColor:'rgba(0,0,0,0.8)',
        height:'100vh',
        zIndex:'25',
        right:'0'

    }

    const all = 'w-[98%] m-auto pt-2 pb-2 box-border block rounded-lg mb-2 text-center'
    const inActive = 'text-black hover:bg-gray-300 '+all
    const active = 'text-white bg-blue-500 '+all

    const isActive = ({isActive}) => isActive ? active:inActive

    return (
        <div className={'md:hidden fixed top-0 duration-100'} style={parentStyle}>
            <div className={'relative bg-white ml-auto pt-14 box-border'} style={sliderStyle}>
                <Button 
                handleClick={()=>props.handleSlideWidth(0)}
                btnInnerText={<IoCloseSharp />} 
                btnStyle={'absolute top-1 left-1 text-[1.3rem] hover:bg-gray-400 cursor-pointer rounded-xl p-2'}
                btnType={'button'}/>

                <div className={''}>
                    <NavLink to={'.'} className={isActive} onClick={()=>props.handleSlideWidth(0)}>home</NavLink>
                    <NavLink to={'about'} className={isActive} onClick={()=>props.handleSlideWidth(0)}>about</NavLink>
                    <NavLink to={'booking'} className={isActive} onClick={()=>props.handleSlideWidth(0)}>booking</NavLink>
                    <NavLink to={'blog'} className={isActive} onClick={()=>props.handleSlideWidth(0)}>blog</NavLink>
                    <NavLink to={'account'} className={isActive} onClick={()=>props.handleSlideWidth(0)}>Account</NavLink>

                </div>
            </div>
        </div>
    )

}

export default MenuSlider