//returns a card component for a service provider account log in
import Image from "../components/image"
import Button from "../components/button"
import { RiDeleteBin5Line } from "react-icons/ri";
import { GrEdit } from "react-icons/gr";



function ServiceCard(props){

    return (
        <div className={'flex shadow-lg shadow-gray-300 items-center mb-10 relative p-4 box-border'}>

            <div className={'h-[150px] w-[40%] lg:h-[200px]'}>
                <Image
                imageURL={props.imageURL}
                imageStyle={'h-full w-full object-cover'}/>
            </div>

            <div className={'w-[60%] px-2 box-border'}>
                <p>{props.title}</p>
                <p>R{props.price}</p>
                <p>{props.description}</p>

                <div className={'lg:absolute right-1 top-1'}>

                    <Button
                    btnInnerText={<RiDeleteBin5Line className={'inline'}/>}
                    handleClick={()=>props.handleDeleteService(props.id)}
                    btnStyle={'text-[1.5rem] mr-4 px-5 rounded-xl hover:bg-gray-400 cursor-pointer'}
                    />


                    <Button
                    btnInnerText={<GrEdit className={'inline'}/>}
                    handleClick={()=>props.handleModal(props.id)}
                    btnStyle={'text-[1.5rem] px-5 rounded-xl hover:bg-gray-400 cursor-pointer'}
                    />
                </div>

            </div>

            
        </div>
    )

}

export default ServiceCard