//renders items available for booking dynamically based on the category type
import ComponentLoader from '../loaders/component-loader'
import SearchForm from "../components/search-form"
import {useState,useEffect} from "react"
import {useParams,useSearchParams} from "react-router-dom"
import {findByCategory} from "../crud/booking"
import ServiceTravel from "../components/services-travelcard"
import ServiceStayCard from "../components/service-staycard"
import TravelForm from "../components/travel-form"
import Button from "../components/button"
import Pagination from "../components/pagination"
import {searchTravelTickets} from "../crud/services"

export default function DynamicCategory(){

    const params = useParams()
    const [servicesOffered,setServicesOffered] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const category  = params.category

    const [searchParams,setSearchParams] = useSearchParams()

    //we are extracting searchTerm from the back to link generated when clicking eye icon to view service to fetch the previously searched services for smooth UI/UX
    /*
    the way this works is we are extracting properties from the URL of the forward button to further propagate the state of the route and pagination
    I discovered this on the 19th of Aug 2025 while diving deeper to react and react router 😁.
     */
    const searchTerm = searchParams.get("searchTerm") !== null && searchParams.get("searchTerm") !== 'null' ? searchParams.get("searchTerm"):""
    const depart = searchParams.get("depart") !== null && searchParams.get("depart") !== "null" ? searchParams.get("depart"):""
    const arrival = searchParams.get("arrival") !== null && searchParams.get("arrival") !== "null" ? searchParams.get("arrival"):""
    const date = searchParams.get("date") !== null && searchParams.get("date") !== "null" ? searchParams.get('date'):""
    const limitToTicket = searchParams.get("limitToTicket") !== null && searchParams.get("limitToTicket") !== "null" ? searchParams.get("limitToTicket"):false
    const prevSlideIndex = searchParams.get('prevIndex') !== null && searchParams.get('prevIndex') !== 'null' ? searchParams.get("prevIndex") : 0
    const prevIndexSlide = searchParams.get("prevSlide") !== null && searchParams.get("prevSlide") !== 'null' ? searchParams.get("prevSlide") : 0

    const [searchText,setSearchText] = useState(searchTerm)
    const [searchTicket,setSearchTicket] = useState({
        depart:depart,
        arrival:arrival,
        date:date
    })

    const [limitToSearchTicket,setLimitToSearchTicket] = useState(limitToTicket)
    const [prevIndex,setPrevIndex] = useState(prevSlideIndex)
    const [prevSlide,setPrevSlide] = useState(prevIndexSlide)

    //we check if category is any of the ones in the array to render a form logically
    const isEq = ['flights','buses'].some((each) => each === category)

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

    const handlePage = async (skip,index) => {

        try{

            
            if(limitToSearchTicket === 'true' || limitToSearchTicket === true){
                const {depart,arrival,date} = searchTicket
                const {data} = await searchTravelTickets({depart,arrival,category,date})
                setServicesOffered(data.services)
            }else{
                const {data} = await findByCategory('',category,skip,2)
                setServicesOffered(data.services)
            }

            setPrevIndex(skip)
            setPrevSlide(index)

         }catch(err){
            console.log(err)
        }


    }

    const handlePageArrow = async (skip) => {

        try{


            if(limitToSearchTicket === 'true' || limitToSearchTicket === true){

                const {depart,arrival,date} = searchTicket
                const {data} = await searchTravelTickets({depart,arrival,category,date})
                setServicesOffered(data.services)

            }else{

                const {data} = await findByCategory('',category,skip,2)
                setServicesOffered(data.services)

            }
            setPrevIndex(skip)
            setPrevSlide(index)

        }catch(err){
            console.log(err)
        }

    }

    useEffect(()=>{

        const fetchServices = async()=>{

            try{


                setIsLoading(true)
                if(limitToSearchTicket === 'true'){
                    const {depart,arrival,date} = searchTicket
                    const {data} = await searchTravelTickets({depart,arrival,category,date})
                    setServicesOffered(data.services)

                }else if(limitToSearchTicket !== "true"){
                    const {data} = await findByCategory('',category,prevIndex,2)
                    setServicesOffered(data.services)
                }
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }

        }
        fetchServices()
    },[params.category])


    if(isLoading){
        return <ComponentLoader/>
    }

    //handles ticket search input change for travel bookings services

    const handleTicketChange = (evt) => {

        const {name,value} = evt.target

        setSearchTicket((oldValue) => {
            return {
                ...oldValue,
                [name]:value
            }
        })

    }

    //handles input change for activity non travel services, remember we rendered this dynamically for different services

    const handleTextChange = (evt) => {
        const {value} = evt.target
        setSearchText(value)
    }
    
    const handleSearch = async () => {

        try{

            if(['stays','activities'].some((each)=>each === category)){
                const {data} = await findByCategory(searchText,category,0,2)
                setServicesOffered(data.services)
            }

        }catch(err){
            console.log(err)
        }

    }

    const handleSearchTicket = async(evt) => {

        evt.preventDefault()

        try{

            const {depart,arrival,date} = searchTicket
            const {data} = await searchTravelTickets({depart,arrival,category,date})
            setServicesOffered(data.services)
            setLimitToSearchTicket(true)

        }catch(err){
            console.log(err)
        }

    }

    return(

        <div className={''}>

            {!isEq && <SearchForm formStyle={'py-1 px-2 rounded-xl mt-1'} inputValue={searchText} handleChange={handleTextChange} handleSearch={handleSearch}/>}
                {isEq && <Button
                btnInnerText={`${toggleState.btnInnerText}`}
                btnStyle={'bg-blue-400 w-[100%] py-2 my-2 box-border cursor-pointer rounded-lg'}
                handleClick={toggleForm}/>}
                {(isEq && toggleState.showForm) && <TravelForm 
                handleChange={handleTicketChange}
                handleSearchTicket={handleSearchTicket}
                depart={searchTicket.depart} 
                arrival={searchTicket.arrival} 
                date={searchTicket.date}/>}

            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>

                {

                    servicesOffered.length > 0 ? servicesOffered.map((each)=>{

                        const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'

                        const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

                        return (

                            each.category === 'flights' || each.category === 'buses' ? 
                            <ServiceTravel
                            key={`servicesOffered-cat${each._id}`}
                            cardStyle={cardStyle}
                            imageContainerStyle={imageContainerStyle}
                            imageURL={each.imageURL}
                            title={each.title}
                            price={each.price}
                            description={each.description}
                            depart={`${each.location.country}, ${each.location.city}, ${each.uniqueFeatures.tripFromAddress.streetName}, ${each.uniqueFeatures.tripFromAddress.postCode}`}
                            arrival={`${each.uniqueFeatures.tripToAddress.country}, ${each.uniqueFeatures.tripToAddress.city}, ${each.uniqueFeatures.tripToAddress.streetName}, ${each.uniqueFeatures.tripToAddress.postCode} `}
                            serviceURL={`../service/information/${each._id}?serviceType=${each.category}&view=categories&depart=${searchTicket.depart}&arrival=${searchTicket.arrival}&date=${searchTicket.date}&limitToTicket=${limitToSearchTicket}&prevIndex=${prevIndex}&prevSlide=${prevSlide}`}
                            bookingURL={`../../service/booking-type/${each._id}?bookingType=${each.category}&view=categories`}
                            imageStyle={'h-full w-full object-cover rounded-xl'}
                            isRelative={true}
                            infoStyle={'py-4 px-2 font-bold'}/>

                            :

                            <ServiceStayCard
                            key={`servicesOffered${each._id}`}
                            cardStyle={cardStyle}
                            imageContainerStyle={imageContainerStyle}
                            imageURL={each.imageURL}
                            title={each.title}
                            country={each.country}
                            city={each.city}
                            price={each.price}
                            description={each.description}
                            serviceURL={`../service/information/${each._id}?serviceType=${each.category}&view=categories&searchTerm=${searchText}&prevIndex=${prevIndex}`}
                            bookingURL={`../../services/booking-type/${each._id}?bookingType=${each.category}&view=categories`}
                            isRelative={true}
                            imageStyle={'h-full w-full object-cover rounded-xl'}
                            infoStyle={'py-2 px-1 font-bold'}
                            />

                        )
                    }):<h2>No {category} found </h2>
                }

            </div>
            <div className={'text-center my-5'}>
                <Pagination handlePage={handlePage} prevIndex={prevIndex} handlePageArrow={handlePageArrow}/>

            </div>
        </div>
    )

}