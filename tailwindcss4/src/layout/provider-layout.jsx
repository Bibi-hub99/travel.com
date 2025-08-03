import ProviderNav from "../provider-components/navigation"
import Dashboard from "../provider-components/dashboard"
import PageInformation from '../provider-components/page-information'
import {useMyContext} from "../context/context"
import {Outlet} from "react-router-dom"

function ProviderLayout(){

    const [value] = useMyContext()

    return (
        <div className={''}>
            <ProviderNav/>
            <div className={'flex'}>
                <Dashboard/>
                <div className={`w-[90%] md:ml-[10%] lg:w-[92%] lg:ml-[8%] ${value.containerStyle} md:w-[100%] box-border`}>
                    <PageInformation/>
                    <div className={'px-2 box-border pt-10'}>
                        <Outlet/>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default ProviderLayout