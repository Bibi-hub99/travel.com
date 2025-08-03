//returns homepage for a service provider log in dashboard
import ProviderNav from "../provider-components/navigation"
import Dashboard from "../provider-components/dashboard"
import OptionCard from "../provider-components/options"
import {useMyContext} from "../context/context"

function HomePage(){

    const [value] = useMyContext()

    return (
        <div className={'pt-20'}>

            <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'}>

                <OptionCard
                icon={value.icons[18].icon}
                title={'My properties'}
                description={'Add/Remove/Edit property'}
                bgColor={'bg-blue-400'}
                urlLink={'my-services'}
                />

                <OptionCard
                icon={value.icons[17].icon}
                title={'Adminstrator'}
                description={'Change Password'}
                bgColor={'bg-black'}
                urlLink={'adminstrator'}/>

                <OptionCard
                icon={value.icons[16].icon}
                title={'My Profile'}
                description={'View/Edit Profile'}
                bgColor={'bg-gray-500'}
                urlLink={'profile'}/>

            </div>

        </div>
    )

}

export default HomePage