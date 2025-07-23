//renders a category index page of the category route
import ComponentLoader from "../loaders/component-loader"
import {findByCategory} from "../crud/booking"
import {useState,useEffect} from "react"
import SearchForm from "../components/search-form"
import ServiceStayCard from "../components/service-staycard"

function CategoryIndex(){

    const [servicesOffered,setServicesOffered] = useState([])
    const [searchResults,setSearchResults]= useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [searchText,setSearchText] = useState("")

    const handleChange = (evt)=>{

        const {value} = evt.target
        setSearchText(value)

    }

    const searchResultsUl = searchResults.length > 0 ? searchResults.map((each)=>{
        return (
            <li>{each.title}</li>
        )
    }):<li>no results</li>

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
            <SearchForm formStyle={'py-1 px-2 rounded-xl mt-1'} inputValue={searchText} inputChange={handleChange}>
                {
                    <p>hello</p>
                }
            </SearchForm>
            <div className={'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4'}>
                {
                    servicesOffered.map((each)=>{

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

                    })
                }
            </div>
        </div>
    )

}

export default CategoryIndex