//returns a sign up page for the app
import {Outlet,useMatch,NavLink} from "react-router-dom"

function SignUp(){

    const allLink = 'w-[50%] py-2'
    const activeLink = 'bg-blue-400 '+allLink
    const inActiveLink = 'bg-gray-200 '+allLink

    const checkLink = ({isActive}) => isActive ? activeLink:inActiveLink

    return (
        <div className={'h-[100vh] flex flex-col justify-center border-1 items-center bg-gray-50'}>

            <div className={'font-medium w-[100%] md:w-[70%] lg:w-[50%]'}>


                <div>

                </div>

                <div className={'shadow-gray-400 shadow-xl/30 box-border rounded-xl bg-white'}>
                    <div className={'rounded-t-xl flex text-center'}>
                        <NavLink className={checkLink} to={'.'} end>Client</NavLink>
                        <NavLink className={checkLink} to={'service-provider'}>Service Provider</NavLink>

                    </div>
                    <div className={'py-2 px-5'}>
                        <p className={'underline text-center my-2'}>Enter service provider information:</p>
                        <Outlet/>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default SignUp