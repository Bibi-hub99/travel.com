//create profile presentation for currently logged in service provider
import {useMyContext} from "../context/context"
import Button from "../components/button"

function Profile(){

    const [value] = useMyContext()

    return (
        <div className={''}>

            <div className={'flex items-center'}>
                <div className={'p-2 w-[50px] border-1 text-center rounded-full'}>
                    {value.icons[3].icon}
                </div>
                <div className={'px-2 box-border'}>
                    <p className={'font-bold'}>Amahle Coomfort</p>
                    <p className={'text-[.9rem] m-0'}>Anxumalo000</p>
                </div>
            </div>

            <div>

            </div>

        </div>
    )

}

export default Profile