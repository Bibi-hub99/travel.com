//returns page for navigating to see already added services and add new services
import OptionCard from "../provider-components/options"
import { CiBoxList } from "react-icons/ci";
import { IoAddOutline } from "react-icons/io5";


function MyServices(){

    return (
        <div className={''}>
            
            <div className={'grid md:grid-cols-2 gap-4'}>
                <OptionCard 
                urlLink={'view'}
                icon={<CiBoxList className={'inline'}/>}
                title={'See Properties'}
                description={'View your properties'}/>
                <OptionCard
                urlLink={'add-service?page=my services'}
                icon={<IoAddOutline className={'inline'}/>}
                title={'Add Service'}
                description={'add your service'}/>
            </div>

        </div>
    )

}

export default MyServices