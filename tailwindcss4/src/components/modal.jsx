//returns a modal
import {createPortal} from "react-dom"
import Button from "../components/button"
import { IoMdClose } from "react-icons/io";
import AddServiceForm from "../provider-components/add-service"

function Modal(props){

    return (
        createPortal(
            <>
                {props.showModal && <div className={'fixed top-0 h-full w-full '} style={{zIndex:'35',backgroundColor:'rgba(0,0,0,0.8)'}}>

                    <div className={'bg-white rounded-xl w-[99%] m-auto h-[90%] md:h-[80%] md:top-[10%] relative top-[10%] md:w-[80%] lg:w-[60%] xl:w-[50%]'}>

                        <div className={'rounded-t-xl absolute top-0 w-full pt-5 text-center bg-white shadow-sm shadow-gray-200'} style={{zIndex:'35'}}>
                            <p>Update Details:</p>
                            <hr className={'h-[.1rem] bg-gray-300 border-none'}></hr>
                            <Button
                            btnInnerText={<IoMdClose className={'inline'}/>}
                            handleClick={()=>props.handleModal(props.state)}
                            btnStyle={'hover:bg-gray-300 py-1 px-5 rounded-xl absolute top-1 right-1 cursor-pointer'}
                            />
                        </div>

                        <div className={'px-5 h-[90%] top-[10%] relative overflow rounded-xl overflow-auto'}>
                            <AddServiceForm
                            isAccomodation={props.isAccomodation}
                            category={props.category}
                            title={props.title}
                            price={props.price}
                            imageURL={props.imageURL}
                            location={props.location}
                            departAddress={props.departAddress}
                            departTime={props.departTime}
                            arrivalAddress={props.arrivalAddress}
                            arrivalTime={props.arrivalTime}
                            description={props.description}
                            handleChange={props.handleChange}
                            handleClick={props.handleClick}/>
                        </div>

                    </div>

                </div>}
            </>
        ,document.getElementById("modal"))
    )

}


export default Modal