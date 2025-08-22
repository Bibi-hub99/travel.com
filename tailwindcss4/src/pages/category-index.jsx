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

    const prevSlideIndex = searchParams.get("prevIndex") !== null && searchParams.get("prevIndex") !== "null" ? searchParams.get("prevIndex"):0
    const prevIndexSlide = searchParams.get("prevSlide") !== null && searchParams.get("prevSlide") !== "null" ? searchParams.get("prevSlide"):0

    const searchTextValue = searchTextParam !== null && searchTextParam !== "null" ? searchTextParam:''

    const [searchText,setSearchText] = useState(searchTextValue)
    
    const [prevIndex,setPrevIndex] = useState(prevSlideIndex)
    const [prevSlide,setPrevSlide] = useState(prevIndexSlide)

    console.log(prevIndex)
    console.log(prevIndexSlide)


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
                setPrevIndex(0)
                setPrevSlide(0)
                setIsLoading(false)
            }catch(err){
                console.log(err)
            }
        }

        if(searchText.length >= 3){
            search(searchText,"stays")
        }

    }

    const clearSearch = async (evt) => {
        evt.preventDefault()
        try{

            if(searchText.length > 0){

                setSearchText("")
                setPrevIndex(0)
                setPrevSlide(0)

                const {data} = await findByCategory("","stays",0,2)
                setServicesOffered(data.services)

            }

        }catch(err){

        }
    }

    useEffect(()=>{

        const findServices = async(searchTerm,category,skip,limit)=>{

            try{

                setIsLoading(true)
                const {data} = await findByCategory(searchTerm,category,skip,limit)
                setServicesOffered(data.services)
                setIsLoading(false)
                
            }catch(err){
                console.log(err)
            }

        }

        findServices(searchText,'stays',prevIndex,2)

    },[])


    const handlePage = async (skip,index) => {

        try{
            const {data} = await findByCategory(searchText,'stays',skip,2)
            setServicesOffered(data.services)
            setPrevIndex(skip)
            setPrevSlide(index)
        }catch(err){
            console.log(err)
        }

    }

    const handlePageArrow = async(skip,index) => {
        try{
            const {data} = await findByCategory(searchText,'stays',skip,2)
            setServicesOffered(data.services)
            setPrevIndex(skip)
            setPrevSlide(index)
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
            handleClearSearch={clearSearch}
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
                        serviceURL={`service/information/${each._id}?serviceType=${each.category}&view=categories&searchTerm=${searchText}&prevIndex=${prevIndex}&prevSlide=${prevSlide}`}
                        bookingURL={`../service/booking-type/${each._id}?bookingType=${each.category}&view=categories&searchTerm=${searchText}`}
                        isRelative={true}
                        imageStyle={'h-full w-full object-cover rounded-xl'}
                        infoStyle={'py-2 px-1 font-bold'}/>

                    }):<p>No houses found</p>
                }
            </div>
            <div className={'my-5 text-center'}>
                <Pagination handlePage={handlePage} prevIndex={prevIndex} prevSlide={prevSlide} handlePageArrow={handlePageArrow}/>
            </div>
        </div>
    )

}

export default CategoryIndex