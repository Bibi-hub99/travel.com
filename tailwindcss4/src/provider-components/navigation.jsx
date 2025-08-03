//returns a navigation bar for service provider log in
import {useMyContext} from "../context/context"
import {Link} from "react-router-dom"
import Button from "../components/button"
import Profile from "./profile"

function ProviderNav(){

    const [value] = useMyContext()

    const btnStyle = 'text-[1.5rem] cursor-pointer'

    return (
        <div className={`py-2 bg-blue-500 text-white rounded-bl-xl rounded-br-xl`}>

            <div className={`${value.containerStyle} flex justify-between items-center`}>

                <div className={'w-[40%] md:hidden'}>
                    <Button
                    btnInnerText={value.icons[1].icon}
                    btnStyle={btnStyle}
                    btnType={'button'}
                    />
                </div>

                <div className={'text-2xl w-[60%] md:w-[30%]'}>
                    <Link className={'text-shadow-black text-shadow-lg'}>Travel.com</Link>
                </div>

                <div className={'hidden md:block w-[70%] px-2 box-border'}>
                    <Profile/>
                </div>


            </div>

        </div>
    )

}

export default ProviderNav