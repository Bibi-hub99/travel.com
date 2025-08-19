//page for viewing single service,when a user click, the service will display on a page
import {useParams,NavLink,Outlet,useSearchParams} from "react-router-dom"
import {useState,useEffect} from "react"
import Image from "../components/image"
import {findSingleService} from "../crud/booking" 
import {useMyContext} from "../context/context"
import Button from "../components/button"

function SingleServicePage(props){

    const [value] = useMyContext()
    const {serviceID} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    const [singleService,setSingleService] = useState({})
    const [similarServices,setSimilarServices] = useState([])

    const allLink = 'w-[33%] py-2 text-center rounded-lg'
    const activeLink = 'bg-blue-400 '+allLink
    const inActiveLink = 'hover:bg-gray-300 '+allLink

    const checkState = ({isActive}) => isActive ? activeLink : inActiveLink
    //check if link is active then style it

    const serviceType = searchParams.get("serviceType")
    const searchTerm = searchParams.get("searchTerm")
    const depart = searchParams.get("depart")
    const arrival = searchParams.get("arrival")
    const date = searchParams.get("date")
    /*link applied conditionally if page rendered was not called under index page of categories, it is for dynamic routing to the categories opposed to routing to index page
        for smooth user experience e.g continue where left off in navigation
    */

    //this logic is based on the fact that we render categories page of stays as index then others dynamically
    //therefore we have to check if serviceType which is category matches stays to route to index or any of the ones rendered dynamically

    const isTravel = ['flights','buses'].some((each)=>each === serviceType)
    const conditionalLink = serviceType !== 'stays' ? `../../../${serviceType}?searchTerm=${searchTerm}`:`../../..?searchTerm=${searchTerm}`
    const conditionalLink2 = `../../../${serviceType}?depart=${depart}&arrival=${arrival}&date=${date}`

    useEffect(()=>{

        const findService = async(serviceID)=>{
            try{
                const {data} = await findSingleService(serviceID)
                console.log(data)
                setSingleService(data.service)
                setSimilarServices(data.similarServices)
            }catch(err){
                console.log(err)
            }
        }

        findService(serviceID)

    },[serviceID])

    let isLoaded
    if(singleService.title){
        isLoaded = true
    }else{
        isLoaded = false
    }

    return (
        <div>
            {isLoaded && <div>

                <div className={`${props.singleServiceStyle} ${value.containerStyle}  pt-10 relative`}>
                    <NavLink to={`${!isTravel ? conditionalLink:conditionalLink2}`} relative={props.isRelative ? "path":"route"} className={'absolute top-1 left-1 px-5 py-1 rounded-tl-full text-white bg-black'}>Back</NavLink>
                    <div className={`h-[400px] rounded-xl relative`}>

                        <Image imageURL={singleService.imageURL} imageStyle={'h-full w-[100%] object-cover rounded-xl'}/>
                        <Button 
                        btnType={'button'} 
                        btnInnerText={value.icons[13].icon}
                        btnStyle={'absolute top-0 right-2 cursor-pointer text-[1.7rem]'}/>

                        <NavLink className={'absolute bottom-1 right-1 bg-blue-500 px-5 py-2 rounded-tl-xl rounded-br-xl shadow-black shadow-xl/30 hover:text-white'} to={props.bookingURL} relative={props.isRelative ? "path":"route"}>Book Now {value.icons[6].icon}</NavLink>
                        <h2 className={'absolute top-1 left-1 text-white text-[1.4rem]'}>{singleService.title}</h2>
                    </div>
                    <br></br>
                    <div className={`flex justify-between`}>

                        <NavLink className={checkState} to={'.'} end>Information</NavLink>
                        <NavLink className={checkState} to={'comments'}>Comments</NavLink>
                        <NavLink className={checkState} to={'similar-items'}>Similar items</NavLink>

                    </div>
                    
                    <br></br>
                    
                                
                </div>
                <div className={`${value.containerStyle}`}>
                    <Outlet context={[singleService,setSingleService,similarServices]}/>
                </div>


            </div>
            }
        </div>
    )

}

export default SingleServicePage