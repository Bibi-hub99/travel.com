import {useEffect,useState,Suspense} from "react"
import {useLoaderData,Await} from "react-router-dom"
import ComponentLoader from "../loaders/component-loader"
import ServiceStayCard from "../components/service-staycard"
import ServiceTravelCard from "../components/services-travelcard"

function AllServicesPage(){

    const {services} = useLoaderData()
    const [servicesOffered,setServicesOffered] = useState([])


    return (
        <Suspense fallback={<ComponentLoader/>}>
            <Await resolve={services}>
                {
                    ({data})=>(
                        <div>

                            <div>
                                {
                                    useEffect(()=>{
                                        setServicesOffered(data.services)
                                    },[])
                                }
                            </div>

                            <div className={'mt-5 grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-3'}>

                                {
                                    servicesOffered.map((each)=>{

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
                                            serviceURL={`service/information/${each._id}?serviceType=${each.category}`}
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
                                            depart={`${each.location.country}, ${each.location.country}, ${each.uniqueFeatures.tripFromAddress.streetName}, ${each.uniqueFeatures.tripFromAddress.postCode}`}
                                            arrival={`${each.uniqueFeatures.tripToAddress.country}, ${each.uniqueFeatures.tripToAddress.city}, ${each.uniqueFeatures.tripToAddress.streetName}, ${each.uniqueFeatures.tripToAddress.postCode} `}
                                            serviceURL={`service/information/${each._id}?serviceType=${each.category}`}
                                            bookingURL={`service/booking-type/${each._id}?bookingType=${each.category}`}
                                            imageStyle={'h-full w-full object-cover rounded-xl'}
                                            infoStyle={'py-4 px-2 font-bold'}/>
                                        )
                                    })
                                }
                            </div>

                        </div>
                    )
                }
            </Await>
        </Suspense>
    )

}

export default AllServicesPage