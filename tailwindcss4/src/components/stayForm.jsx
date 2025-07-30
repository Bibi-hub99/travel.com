//form for booking accomodations and activities like houses etc..
import Input from "./input"
import Button from "./button"
import Image from "./image"

function StayForm(props){

    return (
        <div className={'w-[98%] md:w-[70%] lg:w-[50%]'}>
            <div className={'bg-white shadow-lg/3 shadow-black p-2 box-border rounded-xl flex'}>

                <div className={'w-[40%] h-[100px] md:h-[150px]'}>
                    <Image
                    imageURL={props.imageURL}
                    imageStyle={'w-full h-full object-cover rounded-xl'}/>
                </div>

                <div className={'w-[60%] p-1 box-border font-medium'}>
                    <p>{props.serviceTitle}</p>
                    <br></br>
                    <p>R{props.servicePrice}</p>
                </div>

            </div>
            <br></br>
            <div className={'bg-white p-2 box-border rounded-xl font-bold shadow-black shadow-lg/3'}>

                <div className={'shadow-xl/2'}>
                    <label>check in:</label>
                    <Input
                    inputType={'date'}
                    inputName={'check_in_date'}
                    inputChange={props.inputChange}
                    inputStyle={'border-1 w-[100%] py-2 px-2 box-border rounded-xl'}/>
                    <br></br>
                    <br></br>
                    <label>check out:</label>
                    <Input
                    inputType={'date'}
                    inputName={'check_out_date'}
                    inputChange={props.inputChange}
                    inputStyle={'border-1 w-[100%] py-2 px-2 box-border rounded-xl'}/>
                    <br></br>
                    <br></br>
                    <div className={'text-center'}>
                        <Button
                        btnInnerText={'Book'}
                        btnStyle={'bg-black text-white py-2 px-4 rounded-xl cursor-pointer'}
                        handleClick={()=>props.makeABooking(props.serviceID,props.jwtToken)}/>
                    </div>

                </div>

            </div>
        </div>
    )

}

export default StayForm