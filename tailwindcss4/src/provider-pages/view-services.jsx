import {useMyContext} from "../context/context"
import {useState,useEffect} from "react"
import {getServices} from "../crud/services"
import ServiceCard from "../provider-components/service-card"

function ViewServicesPage(){

    const [value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType] = useMyContext()
    const [myServices,setMyServices] = useState([])

    useEffect(()=>{
        const getProviderServices = async ()=>{
            try{
                const {data} = await getServices(jwtToken)
                setMyServices(data.services)
            }catch(err){
                console.log(err)
            }
        }
        getProviderServices()
    },[])

    return (
        <div>
            {
                myServices.length > 0 ? myServices.map((each)=>{
                    return (
                        <ServiceCard
                        key={`myservices${each._id}`}
                        imageURL={each.imageURL}
                        title={each.title}
                        price={each.price}
                        description={each.description}
                        />
                    )
                }):<p className={'text-red-600 font-bold'}>you do not have any services</p>
            }
        </div>
    )

}

export default ViewServicesPage