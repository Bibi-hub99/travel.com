import {Link,useOutletContext,useSearchParams} from "react-router-dom"
import ServiceStayCard from "../components/service-staycard"
import ServiceTravelCard from "../components/services-travelcard"


function SimilarPage(){

    const [singleService,setSingleService,similarServices] = useOutletContext()

    const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'
    const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

    const [searchParams,setSearchParams] = useSearchParams()

    const view = searchParams.get("view")
    const prevIndex = searchParams.get("prevIndex")
    const prevSlide = searchParams.get("prevSlide")
    const serviceType = searchParams.get("serviceType")
    const searchTerm = searchParams.get("searchTerm")
    const depart = searchParams.get("depart")
    const arrival = searchParams.get("arrival")
    const date = searchParams.get("date")


    ///we first check if similar services is an object and contains at least one element
    const similarMap = typeof(similarServices) === "object" && similarServices.length > 0 ?
    similarServices.map((eachService)=>{

        //we then check if category is any of the ones in the array then render correct component
        return ['stays','activities'].some((each) => each === eachService.category) ? 
        <ServiceStayCard
        cardStyle={cardStyle}
        imageContainerStyle={imageContainerStyle}
        imageStyle={'h-full w-full object-cover rounded-xl'}
        title={eachService.title}
        country={eachService.country}
        city={eachService.city}
        price={eachService.price}
        description={eachService.description}
        serviceURL={`../../${eachService._id}?serviceType=${serviceType}&searchTerm=${searchTerm}&view=${view}&prevIndex=${prevIndex}&prevSlide=${prevSlide}`}
        isRelative={true}
        bookingURL={`..`}
        key={`similar${eachService._id}?`}
        imageURL={eachService.imageURL}
        infoStyle={'py-2 px-1 font-bold'}
        />
        :
        <ServiceTravelCard
        key={`similar${eachService._id}`}
        cardStyle={cardStyle}
        imageContainerStyle={imageContainerStyle}
        imageURL={eachService.imageURL}
        title={eachService.title}
        price={eachService.price}
        description={eachService.description}
        depart={`${eachService.location.country}, ${eachService.location.city}, ${eachService.uniqueFeatures.tripFromAddress.streetName}, ${eachService.uniqueFeatures.tripFromAddress.postCode}`}
        arrival={`${eachService.uniqueFeatures.tripToAddress.country}, ${eachService.uniqueFeatures.tripToAddress.city}, ${eachService.uniqueFeatures.tripToAddress.streetName}, ${eachService.uniqueFeatures.tripToAddress.postCode}`}
        serviceURL={`../../booking/categories/service/information/${eachService._id}?serviceType=${serviceType}&view=${view}&depart=${depart}&arrival=${arrival}&date=${date}&prevIndex=${prevIndex}&prevSlide=${prevSlide}`}
        bookingURL={``}
        imageStyle={'h-full w-full object-cover rounded-xl'}
        infoStyle={'py-2 px-1 font-bold'}/>

    }):<p>No similar services found</p>

    return (

        <div>

            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                {similarMap}
            </div>

        </div>

    )

}

export default SimilarPage