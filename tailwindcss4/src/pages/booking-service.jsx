import {bookService} from "../crud/booking"
import {useEffect,useState} from "react"
import {useParams,useNavigate} from "react-router-dom"

function BookingService(){

    const {serviceID} = useParams()
    const [flashBang,setFlashBang] = useState(false)
    
    const navigate = useNavigate()

    useEffect(()=>{

        const findService = async(serviceID)=>{
            try{
            const {data} = await bookService(serviceID)
            console.log(data)
            setFlashBang(true)
            }catch(err){
                if(err.status === 401){
                    navigate('../login',{relative:'route'})
                }
            }
        }

        findService(serviceID)

    },[])

    return (
        <div>

            {flashBang && <div>
                <p>Hello </p>
            </div>}
            
        </div>
    )

}

export default BookingService