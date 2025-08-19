import ProviderNav from "../provider-components/navigation"
import Dashboard from "../provider-components/dashboard"
import PageInformation from '../provider-components/page-information'
import {useMyContext} from "../context/context"
import {Outlet} from "react-router-dom"
import SliderMenu from "../provider-components/slider-menu"
import {useState} from "react"

function ProviderLayout(){

    const [value] = useMyContext()
    const [width,setWidth] = useState('0%')

    const toggleSlideWidth = (width) => {
        setWidth(`${width}%`)
    }

    return (
        <div className={''}>
            <ProviderNav toggleSlideWidth={toggleSlideWidth}/>
            <div className={'flex'}>
                <Dashboard/>
                <div className={`w-[90%] md:ml-[10%] lg:w-[92%] lg:ml-[8%] ${value.containerStyle} md:w-[100%] box-border`}>
                    <PageInformation/>
                    <div className={'px-2 box-border pt-10'}>
                        <Outlet/>
                    </div>
                </div>
            </div>
            <SliderMenu slideWidth={width} toggleSlideWidth={toggleSlideWidth}/>
        </div>
    )

}

export default ProviderLayout