//renders a category index page of the category route
import ComponentLoader from "../loaders/component-loader"
import {findByCategory,searchService} from "../crud/booking"
import {useState,useEffect} from "react"
import SearchForm from "../components/search-form"
import ServiceStayCard from "../components/service-staycard"

function CategoryIndex(){

    const [servicesOffered,setServicesOffered] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [searchText,setSearchText] = useState("")

    const handleChange = (evt)=>{

        const {value} = evt.target
        setSearchText(value)

    }

    const handleSubmit = (evt)=>{

        evt.preventDefault()

        const search = async(searchTerm,category)=>{
            try{
                setIsLoading(true)
                const {data} = await searchService(searchTerm,category)
                setServicesOffered(data.services)
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }
        }

        if(searchText.length >= 3){
            search(searchText,"stays")
        }

    }

    useEffect(()=>{

        const findServices = async()=>{
            try{
                setIsLoading(true)
                const {data} = await findByCategory('stays')
                setServicesOffered(data.services)
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }
        }

        findServices()

    },[])



    //loader component to display while fetching data from the server

    if(isLoading){
        return <ComponentLoader/>
    }

    return (
        <div>
            <SearchForm 
            formStyle={'py-1 px-2 rounded-xl mt-1'} 
            inputValue={searchText} 
            handleSubmit={handleSubmit}
            inputChange={handleChange}/>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                {
                    servicesOffered.length > 0 ? servicesOffered.map((each)=>{

                        const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'
                        const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

                        return <ServiceStayCard 
                        key={`servicesCategory${each._id}`} 
                        cardStyle={cardStyle}
                        imageContainerStyle={imageContainerStyle}
                        imageURL={each.imageURL}
                        title={each.title}
                        country={each.location.country}
                        city={each.location.city}
                        price={each.price}
                        description={each.description}
                        serviceURL={`service/information/${each._id}?serviceType=${each.category}`}
                        bookingURL={`../service/booking-type/${each._id}?bookingType=${each.category}`}
                        isRelative={true}
                        imageStyle={'h-full w-full object-cover rounded-xl'}
                        infoStyle={'py-2 px-1 font-bold'}/>

                    }):<p>No houses found</p>
                }
            </div>
        </div>
    )

}

export default CategoryIndex