import {bookService,makeBooking} from "../crud/booking"
import {isLoggedIn} from "../utils/auth"
import {useEffect,useState} from "react"
import {useParams,useNavigate,Navigate,useSearchParams} from "react-router-dom"
import StayForm from "../components/stayForm"
import TransForm from "../components/transportForm"
import {useMyContext} from "../context/context"


function BookingService(){

    const [value,jwtToken,setJwtToken,expIn,setExpIn] = useMyContext()

    const {serviceID} = useParams()
    const [searchParams,setSearchParams] = useSearchParams()
    const [service,setService] = useState({})
    const [flashBang,setFlashBang] = useState(false)

    const navigate = useNavigate()

    useEffect(()=>{


        const findService = async(serviceID,token)=>{
            try{
            const {data} = await bookService(serviceID,token)
            setService(data.service)
            setFlashBang(true)
            }catch(err){
                if(err.status === 401){
                    navigate('../login',{relative:'route'})
                }else if(err.status === 403){
                    console.log('user not permitted for resource')
                }
               console.log(err.message + ' error')
            }
        }

        findService(serviceID,jwtToken)

    },[serviceID])

    /*if(!isLoggedIn(expIn)){
        return (
            <Navigate to={'../login'}/>
        )
    }*/

    const makeABooking = async (serviceID,token) => {
        try{
            const {data} = await makeBooking(serviceID,token)
            console.log(data)
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div>

            {flashBang && <div className={'relative h-[100vh] w-full flex flex-col justify-center items-center bg-gray-100'}>
                {
                    searchParams.get("bookingType") === "stays" || searchParams.get("bookingType") === "activities" ?
                    <StayForm
                    imageURL={service.imageURL}
                    serviceTitle={service.title}
                    servicePrice={service.price}
                    serviceID={service._id}
                    makeABooking={makeABooking}
                    jwtToken={jwtToken}/>
                    :
                    <TransForm
                    serviceID={service._id}
                    makeABooking={makeABooking}
                    jwtToken={jwtToken}
                    imageURL={service.imageURL}
                    serviceTitle={service.title}
                    servicePrice={service.price}
                    depart={`${service.location.country},${service.location.city},${service.uniqueFeatures.tripFromAddress.streetName},${service.uniqueFeatures.tripFromAddress.postCode}`}
                    arrival={`${service.uniqueFeatures.tripToAddress.country},${service.uniqueFeatures.tripToAddress.city},${service.uniqueFeatures.tripToAddress.streetName},${service.uniqueFeatures.tripToAddress.postCode}`}/>
                }
            </div>}
            
        </div>
    )

}

export default BookingService