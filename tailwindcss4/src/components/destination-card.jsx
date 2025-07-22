//handles card components for trending destinations results which are an array of destinations
import { FaLongArrowAltRight } from "react-icons/fa";

import {Link} from 'react-router-dom'
import Image from "./image"

function DestinationCard(props){

    //stylings are passed on the home page and passed as props to this and its child components

    return (


        <div className={`${props.cardStyle} location-parent`}>

            <Image imageURL={props.imageURL} imageAlt={props.imageAlt} imageStyle={props.imageStyle}/>

            {<div className={'location-info'}>
                <p>{props.destLocation}</p>
                <p>{props.destCountry}</p>
                <Link to={`booking/locations?destination=${props.destLocation}`} className={'relative top-[25%] mt-10 block w-[50%] ml-[25%] bg-blue-500 text-center py-3 rounded-full text-white'}>See More <FaLongArrowAltRight className={'inline'}/></Link>
            </div>}

        </div>
    )

}

export default DestinationCard