//returns a page for entering data to add new service
import AddServiceForm from "../provider-components/add-service"
import {useState} from "react"
import {addService} from "../crud/services" 
import {useMyContext} from "../context/context"

function AddService(){

    const [value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType] = useMyContext()

    const categories = ['','stays','activities']

    const [serviceInfo,setServiceInfo] = useState({
        category:''  
    })

    const isAccomodation = [...categories].some((each)=>{
        return each === serviceInfo.category
    })

    console.log(serviceInfo)
    
    const handleAddService = async () => {
        
        if(['','stays','activities'].some((each)=>each === serviceInfo['category'])){

            delete serviceInfo['departAddress']
            delete serviceInfo['departTime']
            delete serviceInfo['arrivalAddress']
            delete serviceInfo['arrivalTime']

        }else{
            serviceInfo['location'] = ""
            delete serviceInfo['location']
        }

        try{
            const {data} =  await addService({jwtToken,...serviceInfo})
            console.log(data)
        }catch(err){
            if(err.status === 404){
                console.log('404 error')
            }
        }
    }

    const handleChange = (evt) => {
        const {name,value} = evt.target
        setServiceInfo((oldValue)=>{
            return {
                ...oldValue,
                [name]:value
            }
        })
     }


    return (

        <div>
            <AddServiceForm 
            isAccomodation={isAccomodation} 
            category={serviceInfo.category}
            title={serviceInfo.title || ""}
            price={serviceInfo.price || ""}
            imageURL={serviceInfo.imageURL || ""}
            location={serviceInfo.location || ""}
            departAddress={serviceInfo.departAddress || ""}
            departTime={serviceInfo.departTime || ""}
            arrivalAddress={serviceInfo.arrivalAddress || ""}
            arrivalTime={serviceInfo.arrivalTime || ""}
            description={serviceInfo.description || ""}
            handleChange={handleChange}
            handleAddService={handleAddService}/>
        </div>

    )

}

export default AddService