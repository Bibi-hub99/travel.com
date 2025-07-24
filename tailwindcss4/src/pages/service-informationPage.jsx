//builds a component for showing selected service information index page
import {useMyContext} from "../context/context"

import {useOutletContext} from "react-router-dom"

function ServiceInformationPage(){

    const [singleService,setSingleService] = useOutletContext()
    const [value] = useMyContext()

    const {category} = singleService
    //checks if service is accomodation or transport then render specific component
    const isAccomodation = category === "stays" || category === "activities"

    return (
        <div className={'font-bold pb-5'}>

                <div className={''}>
                    <p>{singleService.description}</p><br></br>
                    <p>Price: {singleService.price}</p>
                </div>

                {
                    isAccomodation ? 
                    <div>
                        <p>Location : {singleService.location.country},{singleService.location.city}</p>
                    </div>
                    :
                    <div>
                        <p>{value.icons[11].icon} : {singleService.location.country},{singleService.location.city}, {singleService.uniqueFeatures.tripFromAddress.streetName}, {singleService.uniqueFeatures.tripFromAddress.postCode}</p>
                        <p>{value.icons[12].icon} : {singleService.uniqueFeatures.tripToAddress.country}, {singleService.uniqueFeatures.tripToAddress.city}, {singleService.uniqueFeatures.tripToAddress.streetName}, {singleService.uniqueFeatures.tripToAddress.postCode}</p>
                    </div>
                }

        </div>
    )

}

export default ServiceInformationPage