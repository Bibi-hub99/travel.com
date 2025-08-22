import {useEffect,useState,Suspense} from "react"
import {useLoaderData,Await,useSearchParams,useNavigate} from "react-router-dom"
import ComponentLoader from "../loaders/component-loader"
import ServiceStayCard from "../components/service-staycard"
import ServiceTravelCard from "../components/services-travelcard"
import Pagination from "../components/pagination"
import {paginateServices} from "../crud/booking"

function AllServicesPage(){


    //const {services} = useLoaderData()

    const [servicesOffered,setServicesOffered] = useState([])
    const [searchParams,setSearchParams] = useSearchParams()

    const prevSlideIndex = searchParams.get("prevIndex") !== null && searchParams.get("prevIndex") !== "null" ? searchParams.get("prevIndex") : 0
    const prevIndexSlide = searchParams.get("prevSlide")

    //const prevSlideIndex = searchParams.get("prevIndex") !== null && searchParams.get("null") ? searchParams.get("")

    const [prevIndex,setPrevIndex] = useState(prevSlideIndex)
    const [prevSlide,setPrevSlide] = useState(prevIndexSlide)

    console.log(prevIndex)
    console.log(prevSlide)

    useEffect(() => {

        const findServices = async(skip,limit) => {
            try{
                const {data} = await paginateServices({skip,limit})
                console.log(data)
                setServicesOffered(data.services)
            }catch(err){
                console.log(err)
            }
        }

        findServices(prevSlideIndex,2)

    },[])

    const handlePage = async(skip,index) => {

        try{
            const {data} = await paginateServices({skip:skip,limit:2})
            setServicesOffered(data.services)
            setPrevIndex(skip)
            setPrevSlide(index)
        }catch(err){
            console.log(err)
        }


    }



    const handlePageArrow = async(skip,prevSlide) => {

        try{
            const {data} = await paginateServices({skip:skip,limit:2})
            setServicesOffered(data.services)
            setPrevIndex(skip)
            //setPrevSlide()
        }catch(err){
            console.log(err)
        }

    }


    return (
        //<Suspense fallback={<ComponentLoader/>}>
            //<Await resolve={services}>
                //{
                //    ({data})=>(
                        <div>

                            {/*<div>
                                {
                                    useEffect(()=>{
                                        setServicesOffered(data.services)
                                    },[])
                                }
                            </div>*/}

                            <div className={'mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3'}>

                                {
                                    servicesOffered.length > 0 ? servicesOffered.map((each)=>{

                                        const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'

                                        const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

                                        return (
                                            each.category === 'stays' || each.category === "activities" ?
                                            <ServiceStayCard
                                            key={`servicesOffered${each._id}`} 
                                            cardStyle={cardStyle} 
                                            imageContainerStyle={imageContainerStyle}
                                            imageURL={each.imageURL}
                                            title={each.title}
                                            country={each.location.country}
                                            city={each.location.city}
                                            price={each.price}
                                            description={each.description}
                                            serviceURL={`service/information/${each._id}?serviceType=${each.category}&view=booking&prevIndex=${prevIndex}&prevSlide=${prevSlide}`}
                                            bookingURL={`service/booking-type/${each._id}?bookingType=${each.category}`}
                                            imageStyle={'h-full w-full object-cover rounded-xl'}
                                            infoStyle={'py-2 px-1 font-bold'}/>
                                            :
                                            
                                            <ServiceTravelCard
                                            key={`servicesOffered${each._id}`} 
                                            cardStyle={cardStyle}
                                            imageContainerStyle={imageContainerStyle}
                                            imageURL={each.imageURL}
                                            title={each.title}
                                            price={each.price}
                                            depart={`${each.location.country}, ${each.location.city}, ${each.uniqueFeatures.tripFromAddress.streetName}, ${each.uniqueFeatures.tripFromAddress.postCode}`}
                                            arrival={`${each.uniqueFeatures.tripToAddress.country}, ${each.uniqueFeatures.tripToAddress.city}, ${each.uniqueFeatures.tripToAddress.streetName}, ${each.uniqueFeatures.tripToAddress.postCode} `}
                                            serviceURL={`service/information/${each._id}?serviceType=${each.category}&view=booking&baseBookingURL=${true}&prevIndex=${prevIndex}&prevSlide=${prevSlide}`}
                                            bookingURL={`service/booking-type/${each._id}?bookingType=${each.category}`}
                                            imageStyle={'h-full w-full object-cover rounded-xl'}
                                            infoStyle={'py-4 px-2 font-bold'}/>
                                        )
                                    })
                                :<p>No Services Found</p>}
                            </div>

                            <div className={'my-5 text-center'}>
                                <Pagination handleClick={handlePage} prevIndex={prevIndex} prevSlide={prevSlide} handlePageArrow={handlePageArrow}/>
                            </div>

                        </div>
                    //)
                //}
           // </Await>
       // </Suspense>
    )

}

export default AllServicesPage