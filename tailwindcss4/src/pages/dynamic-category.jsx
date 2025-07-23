//renders items available for booking dynamically based on the category type
import ComponentLoader from '../loaders/component-loader'
import SearchForm from "../components/search-form"
import {useState,useEffect} from "react"
import {useParams} from "react-router-dom"
import {findByCategory} from "../crud/booking"
import ServiceTravel from "../components/services-travelcard"
import TravelForm from "../components/travel-form"
import Button from "../components/button"

export default function DynamicCategory(){

    const params = useParams()
    const [servicesOffered,setServicesOffered] = useState([])
    const [isLoading,setIsLoading] = useState(false)

    const isEq = params.category === "flights" || params.category === "buses"

    const [toggleState,setToggleState] = useState({
        showForm:false,
        btnInnerText:'search ticket'
    })


    //handles toggling the ticket search form
    const toggleForm = ()=>{

        setToggleState((oldValue)=>{

            let {showForm,btnInnerText} = oldValue
            if(showForm){
                showForm = false
                btnInnerText = 'search ticket'
            }else{
                showForm = true
                btnInnerText = 'close form'
            }
            return {
                ...oldValue,
                showForm:showForm,
                btnInnerText:btnInnerText
            }

        })

    }


    useEffect(()=>{
        const fetchServices = async()=>{
            try{
                setIsLoading(true)
                const {data} = await findByCategory(params.category)
                setServicesOffered(data.services)
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }
        }
        fetchServices()
    },[params])

    if(isLoading){
        return <ComponentLoader/>
    }

    return (
        <div className={''}>

            {false && <SearchForm formStyle={'py-1 px-2 rounded-xl mt-1'}/>}
                {isEq && <Button
                btnInnerText={`${toggleState.btnInnerText}`}
                btnStyle={'bg-blue-400 w-[100%] py-2 my-2 box-border cursor-pointer'}
                handleClick={toggleForm}/>}
                {(isEq && toggleState.showForm) && <TravelForm />}

            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                {
                    params.category !== "activities" ? servicesOffered.length > 0 ? servicesOffered.map((each)=>{

                        const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'

                        const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

                        return (
                            <ServiceTravel
                            key={`servicesOffered-cat${each._id}`}
                            cardStyle={cardStyle}
                            imageContainerStyle={imageContainerStyle}
                            imageURL={each.imageURL}
                            price={each.price}
                            depart={`${each.location.country}, ${each.location.country}, ${each.uniqueFeatures.tripFromAddress.streetName}, ${each.uniqueFeatures.tripFromAddress.postCode}`}
                            arrival={`${each.uniqueFeatures.tripToAddress.country}, ${each.uniqueFeatures.tripToAddress.city}, ${each.uniqueFeatures.tripToAddress.streetName}, ${each.uniqueFeatures.tripToAddress.postCode} `}
                            serviceURL={`../service/information/${each._id}?serviceType=${each.category}`}
                            bookingURL={`../../service/booking-type/${each._id}?bookingType=${each.category}`}
                            imageStyle={'h-full w-full object-cover rounded-xl'}
                            isRelative={true}
                            infoStyle={'py-4 px-2 font-bold'}/>
                            
                        )
                    }):<h2>No {params.category} found </h2>:<p></p>
                }
            </div>
        </div>
    )

}