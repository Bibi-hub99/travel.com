//builds components asking a user to login or register on home page
import Image from "./image"
import {Link} from "react-router-dom"
import {useMyContext} from "../context/context"

function HomeLogin(){

    const [value] = useMyContext()

    return (
        <div className={`flex border-1 border-gray-300 rounded-xl p-2 ${value.containerStyle} mb-32`}>

            <div className={'w-[75%] md:w-[80%] lg:w-[90%]'}>
                <h2 className={'font-bold'}>Travel fast, cheap and safely </h2>
                <br></br>
                <Link className={'bg-blue-500 py-2 px-3 rounded-xl'} to={'login'}>Login</Link>
                <Link className={'ml-3 bg-gray-300 py-2 px-3 rounded-xl'} to={'register'}>Register</Link>
            </div>
            <div className={'h-[100px] w-[25%] md:w-[20%] lg:w-[10%]'}>
                <Image 
                imageStyle={"h-full w-full rounded-xl"}
                imageURL={'https://media.istockphoto.com/id/2166253522/photo/3d-rendering-of-shopping-trolley-with-parcel-boxes-shopping-online-concept.jpg?s=612x612&w=0&k=20&c=MnI3SH9XOaT5zgTeKozjrYybTih6XU-7Lft30fB2sgQ='}/>
            </div>

        </div>
    )

}

export default HomeLogin