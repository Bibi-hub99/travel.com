//builds find by type component
//it is styled using css on the App.css using the className for better control or complicated design
import Image from "./image"
import {Link} from "react-router-dom"

function ServiceTypeCard(props){

    const serviceType = `${props.title}`.toLowerCase()

    const serviceLink = serviceType === 'stays' ? 'booking/categories':`booking/categories/${serviceType}`

    return (
        <div className={'slider-child'}>
            <Image imageURL={props.imageURL} imageStyle={props.imageStyle}/>
            <div className={'absolute inset-0 flex flex-col items-center justify-center font-bold text-white'}>
                <Link to={serviceLink} className={'underline text-shadow-black text-shadow-lg hover:no-underline'}>checkout {props.title}</Link>
            </div>
        </div>
    )

}

export default ServiceTypeCard