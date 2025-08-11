import {useMyContext} from "../context/context"
import {useState,useEffect} from "react"
import {getServices} from "../crud/services"
import ServiceCard from "../provider-components/service-card"
import Modal from "../components/modal"
import {updateService,deleteService} from "../crud/services"

function ViewServicesPage(){

    const [value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType] = useMyContext()
    const [myServices,setMyServices] = useState([])
    const [showModal,setShowModal] = useState(false)
    const [modalService,setModalService] = useState({
        category:"",
        location:""
    })


    console.log(modalService)

    const categories = ['','stays','activities']

    const isAccomodation = [...categories].some((each)=>each === modalService["category"])

    const handleChange = (evt) => {

        const {name,value} = evt.target
        setModalService((oldValue)=>{
            return {
                ...oldValue,
                [name]:value
            }
        })

    }

    const handleUpdateService = async(evt) => {

        evt.preventDefault()

        if(['','stays','activities'].some((each)=>each === modalService["category"])){
            delete modalService['departAddress']
            delete modalService['departTime']
            delete modalService["arrivalAddress"]
            delete modalService["arrivalTime"]
        }else{
            modalService["location"] = ""
            delete modalService["location"]
        }


        try{
            const serviceID = modalService._id
            const {data} = await updateService({serviceID,jwtToken,...modalService})
            setMyServices(data.services)
            setShowModal(false)
        }catch(err){
            console.log(err)
        }

    }

    const handleDeleteService = async(serviceID) => {

        try{
            const {data} = await deleteService({serviceID,jwtToken})
            setMyServices(data.services)
        }catch(err){
            console.log(err)
        }

    }

    const openModal = (id) => {

        const findService = myServices.find((each)=>{
            return each["_id"] === id
        })


        //restructuring the object fields so the input field will be able to be controlled

        const {location} = findService
        const {country,city} = location

        const updateObj = {
            ...findService,
            location:`${country},${city}`
        }

        if(['flights','buses'].some((each)=>each === findService['category'])){
            const {uniqueFeatures} = findService
            updateObj["departAddress"] = `${country},${city},${uniqueFeatures.tripFromAddress.streetName},${uniqueFeatures.tripFromAddress.postCode}`
            //updateObj["departTime"] = `${uniqueFeatures}`
            updateObj["arrivalAddress"] = `${uniqueFeatures.tripToAddress.country},${uniqueFeatures.tripToAddress.city},${uniqueFeatures.tripToAddress.streetName},${uniqueFeatures.tripToAddress.postCode}`
            delete updateObj["uniqueFeatures"]
        }
        //making locations one string for control
        setModalService({...updateObj})
        setShowModal(true)

    }

    const handleModal = (state) => {
        setShowModal(state)
    }

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
                        id={each._id}
                        handleModal={openModal}
                        handleDeleteService={handleDeleteService}
                        />
                    )
                }):<p className={'text-red-600 font-bold'}>you do not have any services</p>
            }
            <Modal 
            showModal={showModal} 
            state={false}
            handleModal={handleModal}
            isAccomodation={isAccomodation}
            category={modalService["category"] || ""}
            title={modalService["title"] || ""}
            price={modalService["price"] || ""}
            imageURL={modalService["imageURL"] || ""}
            location={modalService.location || ""}
            departAddress={modalService["departAddress"] || ""}
            departTime={modalService["departTime"] || ""}
            arrivalAddress={modalService["arrivalAddress"] || ""}
            arrivalTime={modalService["arrivalTime"] || ""}
            description={modalService["description"] || ""}
            handleChange={handleChange}
            handleClick={handleUpdateService}
            />
        </div>
    )

}

export default ViewServicesPage