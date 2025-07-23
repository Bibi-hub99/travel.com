import Image from "./image"
import {Link} from "react-router-dom"

function OfferCard(props){

    const image = props.imageURL
    const bgImage = `bg-[url(${image})]`

    return (
        <div className={`bgImage bg-no-repeat bg-cover bg-center py-10 px-2 box-border rounded-lg border-2 font-extrabold text-white text-shadow-black text-shadow-md relative`}>
            <div className={'text-left'}>

                <p className={'text-[1rem]'}>{props.offerTitle}</p>
                <p className={'text-[1.3rem] mb-3'}>{props.offerDescription}</p>

                <div className={'bg-blue-600 absolute right-1 bottom-1 py-2 px-5 rounded-br-xl rounded-tl-xl'}>
                    <p>R1000</p>
                </div>

                <Link to={`booking/categories/${props.offerCategory}/${props.offerId}`} className={'absolute bottom-1 left-2 py-2 px-5 bg-blue-700 rounded-xl'}>Book Now</Link>
                
            </div>
            
            
        </div>
    )

}

export default OfferCard