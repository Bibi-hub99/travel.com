//navigational link card displayed in the homepage for navigating intuitively
import {Link} from "react-router-dom"

function OptionCard(props){

    return (
        <div className={'shadow-gray-500 shadow-lg bg-white text-center rounded-xl hover:scale-75 hover:text-blue-500 duration-100'}>
            <Link className={'block py-8'} to={props.urlLink}> 

                <div className={'text-[2rem]'}>
                    {props.icon}
                </div>
                <div>
                    <p>{props.title}</p>
                    <p>{props.description}</p>
                </div>

            </Link>
            <div className={`rounded-b-xl h-[1rem] ${props.bgColor}`}>

            </div>
        </div>
    )

}

export default OptionCard