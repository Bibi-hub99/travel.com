//build a component for showing banner information about a company values to be pre
import Image from "./image"


function CompanyValueCard(props){

    return (
    
            <div className={'flex items-center shadow-black bg-gray-100 shadow-xl/30  p-2 rounded-xl'}>
                <div className={'h-[100px] w-[25%]'}>
                    <Image imageStyle={props.imageStyle} imageURL={props.imageURL}/>
                </div>
                <div className={'w-[75%] px-2 box-border'}>
                    <p className={'text-[1.5rem] font-bold'}>{props.title}</p>
                    <p>{props.description}</p>
                </div>
            </div>
        )


}

export default CompanyValueCard