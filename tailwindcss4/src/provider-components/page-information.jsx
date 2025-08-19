import {useMyContext} from "../context/context"
import {useSearchParams} from "react-router-dom"


function PageInformation(props){

    const [searchParams,setSearchParams] = useSearchParams()
    const [value] = useMyContext()

    const page = searchParams.get("page") || "home"

    return (
        <div className={'py-6 bg-gray-100 px-2 box-border mt-14'}>
            <p className={'text-[1.1rem] capitalize'}>{value.icons[20].icon} {page}</p>
        </div>
    )

}

export default PageInformation