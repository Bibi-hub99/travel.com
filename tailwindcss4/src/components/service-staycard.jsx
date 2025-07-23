//build a card component for services like accomodation,hotels and activities
import Image from "./image"
import {Link} from "react-router-dom"
import {useMyContext} from "../context/context"
import Button from "./button"

function ServiceStayCard(props){

    const [value] = useMyContext()

    return (
        <div className={props.cardStyle}>
            <div className={props.imageContainerStyle}>
                <Image imageURL={props.imageURL} imageStyle={props.imageStyle}/>
                <div className={'absolute top-1 left-1 text-white text-shadow-black text-shadow-lg font-bold'}>
                    <p className={'text-[1.2rem]'}>{props.title}</p>
                    <p>{props.country}, {props.city}</p>
                </div>
                <Button btnType={'button'} btnStyle={'absolute top-0 right-1 cursor-pointer text-[1.7rem]'} btnInnerText={value.icons[13].icon}/>
                <Link className={'absolute bottom-1 left-1 text-[1.7rem]'} to={props.serviceURL}>{value.icons[14].icon}</Link>
                <Link className={'absolute bottom-1 right-1 bg-blue-500 px-5 py-2 rounded-tl-xl rounded-br-xl shadow-black shadow-xl/30 hover:text-white'} to={props.bookingURL}>R {props.price} {value.icons[6].icon}</Link>

            </div>

            <div className={props.infoStyle}>
                {props.description}
            </div>
        </div>
    )

}

export default ServiceStayCard