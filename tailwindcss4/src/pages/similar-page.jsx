import {Link,useOutletContext} from "react-router-dom"
import ServiceStayCard from "../components/service-staycard"
import ServiceTravelCard from "../components/services-travelcard"

function SimilarPage(){

    const [singleService,setSingleService,similarServices] = useOutletContext()
    console.log(similarServices)

    const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'
    const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

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
        serviceURL={`../${eachService._id}`}
        bookingURL={`..`}
        key={`similar${eachService._id}`}
        imageURL={eachService.imageURL}
        infoStyle={'py-2 px-1 font-bold'}
        />
        :
        <ServiceTravelCard
        key={`similar${eachService._id}`}
        cardStyle={cardStyle}
        imageContainerStyle={imageContainerStyle}
        imageURL={eachService.imageURL}
        depart={`${eachService.location.country}, ${eachService.location.city}, ${eachService.uniqueFeatures.tripFromAddress.streetName}, ${eachService.uniqueFeatures.tripFromAddress.postCode}`}
        arrival={`${eachService.uniqueFeatures.tripToAddress.country}, ${eachService.uniqueFeatures.tripToAddress.city}, ${eachService.uniqueFeatures.tripToAddress.streetName}, ${eachService.uniqueFeatures.tripToAddress.postCode}`}
        serviceURL={``}
        bookingURL={``}
        imageStyle={'h-full w-full object-cover rounded-xl'}
        infoStyle={'py-2 px-1 font-bold'}/>

    }):<p>No similar services found</p>

    return (
        <div>

            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                {similarMap}
            </div>

import {Link} from "react-router-dom"

function SimilarPage(){

    return (
        <div className={''}>
            <p>Show similar</p>
        </div>
    )

}

export default SimilarPage