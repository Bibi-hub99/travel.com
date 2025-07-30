import Image from "./image"
import Button from "./button"

//handles booking information for transport like flights and buses

function TransForm(props){

    return (
        <div className={'w-[98%] md:w-[70%] lg:w-[50%]'}>

            <div className={'bg-white p-2 box-border shadow-lg/3 shadow-black rounded-xl flex'}>

                <div className={'w-[40%] h-[100px] md:h-[120px]'}>
                    <Image
                    imageURL={props.imageURL}
                    imageStyle={'h-full w-full object-cover rounded-xl'}/>
                </div>

                <div className={'w-[60%] p-1 box-border font-medium'}>
                    <p>{props.serviceTitle}</p>
                    <p>R{props.servicePrice}</p>
                    <p>from : {props.depart}</p>
                    <p>to : {props.arrival}</p>
                </div>

            </div>
            <br></br>
            <div className={'text-center bg-white p-2 box-border rounded-xl'}>
                <Button
                btnInnerText={'Book'}
                btnStyle={'bg-black text-white px-4 py-2 rounded-xl cursor-pointer'}
                handleClick={()=>props.makeABooking(props.serviceID,props.jwtToken)}/>
            </div>

        </div>
    )

}

export default TransForm