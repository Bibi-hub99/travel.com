//builds a mobile menu slider
import { IoCloseSharp } from "react-icons/io5";
import Button from "./button"

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

    return (
        <div className={'fixed top-0 duration-100'} style={parentStyle}>
            <div className={'relative bg-white ml-auto'} style={sliderStyle}>
                <Button 
                handleClick={()=>props.handleSlideWidth(0)}
                btnInnerText={<IoCloseSharp />} 
                btnStyle={'absolute top-1 left-1 text-[1.3rem] hover:bg-gray-400 cursor-pointer rounded-xl p-2'}
                btnType={'button'}/>

                <div>

                </div>
            </div>
        </div>
    )

}

export default MenuSlider