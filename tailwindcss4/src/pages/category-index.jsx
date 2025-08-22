//renders a category index page of the category route
import ComponentLoader from "../loaders/component-loader"
import {findByCategory,searchService} from "../crud/booking"
import {useState,useEffect} from "react"
import SearchForm from "../components/search-form"
import ServiceStayCard from "../components/service-staycard"
import Pagination from "../components/pagination"
import {useSearchParams} from "react-router-dom"

function CategoryIndex(){

    const [servicesOffered,setServicesOffered] = useState([])
    const [isLoading,setIsLoading] = useState(false)
    const [searchParams,setSearchParams] = useSearchParams()
    const searchTextParam = searchParams.get('searchTerm')
    const prevIndex = searchParams.get("prevIndex")

    const searchTextValue = searchTextParam !== null && searchTextParam !== "null" ? searchTextParam:''
    const prevIndexValue = prevIndex !== null && prevIndex !== "null" ? prevIndex:0

    const [searchText,setSearchText] = useState(searchTextValue)
    const [prevIndexSlide,setPrevIndexSlide] = useState(prevIndexValue)


    const handleChange = (evt)=>{

        const {value} = evt.target
        setSearchText(value)

    }

    const handleSearch = (evt)=>{

        evt.preventDefault()

        const search = async()=>{
        
            try{
                setIsLoading(true)
                const {data} = await findByCategory(searchText,'stays',0,2)
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

        const findServices = async(searchTerm,category,skip,limit)=>{

            try{

                setIsLoading(true)
                const {data} = await findByCategory(searchTerm,category,skip,limit)
                setServicesOffered(data.services)
                setPrevIndexSlide(skip)
                setIsLoading(false)
                
            }catch(err){
                console.log(err)
            }

        }

        findServices(searchText,'stays',prevIndexSlide,2)

    },[])


    const handlePage = async (skip,index) => {

        try{
            const {data} = await findByCategory(searchText,'stays',skip,2)
            setServicesOffered(data.services)
        }catch(err){
            console.log(err)
        }

    }

    const handlePageArrow = async(skip) => {
        try{
            const {data} = await findByCategory(searchText,'stays',skip,2)
            setServicesOffered(data.services)
        }catch(err){
            console.log(err)
        }
    }

    //loader component to display while fetching data from the server

    if(isLoading){
        return <ComponentLoader/>
    }

    return (
        <div>
            <SearchForm 
            formStyle={'py-1 px-2 rounded-xl mt-1'} 
            inputValue={searchText} 
            handleSearch={handleSearch}
            handleChange={handleChange}/>
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
                        serviceURL={`service/information/${each._id}?serviceType=${each.category}&view=categories&searchTerm=${searchText}&prevIndex=${prevIndexSlide}`}
                        bookingURL={`../service/booking-type/${each._id}?bookingType=${each.category}&view=categories&searchTerm=${searchText}`}
                        isRelative={true}
                        imageStyle={'h-full w-full object-cover rounded-xl'}
                        infoStyle={'py-2 px-1 font-bold'}/>

                    }):<p>No houses found</p>
                }
            </div>
            <div className={'my-5 text-center'}>
                <Pagination handleClick={handlePage} handlePageArrow={handlePageArrow}/>
            </div>
        </div>
    )

}

export default CategoryIndex