//returns results after a search has been perfomed
import {useSearchParams,useLocation,useNavigate} from "react-router-dom"
import {useState,useEffect} from "react"
import {useMyContext} from "../context/context"
import Button from "../components/button"
import Input from "../components/input"
import { LuSettings2 } from "react-icons/lu";
import { queryService } from "../crud/search";
import  ServiceStayCard from "../components/service-staycard"
import ServiceTravelCard from "../components/services-travelcard"

function SearchPage(){

    const [value] = useMyContext()
    const [searchQuery,setSearchQuery] = useSearchParams()
    const [servicesOffered,setServicesOffered] = useState([])
    const [searchText,setSearchText] = useState(searchQuery.get("searchTerm"))
    const navigate = useNavigate()

    //return the specified query attribute or field to get
    const queryGetter = (attr)=>{

        const queryItem =  searchQuery.get(attr)
        if(queryItem !== null && queryItem !== "null"){
            return queryItem
        }
    }

    const searchTerm = queryGetter("searchTerm")
    const skip = queryGetter("skip")
    const limit = queryGetter("limit")
    const category = queryGetter("category")
    const minFilter = queryGetter("minFilter")
    const midFilter = queryGetter("midFilter")
    const highFilter = queryGetter("highFilter")
    const maxFilter = queryGetter("maxFilter")

    //bundles query attributes into object query
    const queryObj = {

        searchTerm,
        skip,
        limit,
        category,
        minFilter,
        midFilter,
        highFilter,
        maxFilter

    }

    const handleChange = (evt) => {
        const {value} = evt.target
        setSearchText(value)
    }//handle input change

    const handleSearch = (searchText)=>{
        setSearchQuery({
            ...queryObj,
            searchTerm:searchText
        })
    }

    const handleCheck = (evt) => {

        const {name,value,type,checked} = evt.target

        if(type === 'checkbox'){
            setSearchQuery({
                ...queryObj,
              [name]:checked
            })
        }else{
            
        }

    }


    useEffect(()=>{

        const queryServices = async()=>{

            try{
                const {data} = await queryService(queryObj)
                setServicesOffered(data.services)
            }catch(err){
                console.log(err)
            }

        }

        queryServices()

    },[searchQuery])

    return (
        <div className={`${value.containerStyle} mt-2 lg:mt-0 lg:w-[100%]`}>

            <div className={'flex items-center md:w-[80%] m-auto bg-gray-200 py-1 rounded-xl lg:hidden'}>

                <div className={'w-[20%] md:w-[15%] text-center'}>
                    <Button
                    btnInnerText={'Back'}
                    btnStyle={'bg-black text-white py-2 px-4 rounded-xl cursor-pointer'}/>
                </div>

                <div className={'w-[60%] md:w-[70%] relative'}>
                    <Input
                    inputType={'text'}
                    inputValue={searchText}
                    inputChange={handleChange}
                    inputStyle={'border-1 w-[100%] py-2 rounded-xl px-2 box-border outline'}/>

                    <Button
                    btnInnerText={value.icons[0].icon}
                    handleClick={()=>handleSearch(searchText)}
                    btnType={'button'} 
                    btnStyle={'absolute right-1 rounded-xl cursor-pointer text-white bg-blue-600 h-[90%] top-[5%] px-5'}/>
                </div>

                <div className={'w-[20%] md:w-[15%] text-center relative'}>
                    <Button
                    btnInnerText={<LuSettings2 className={'inline'}/>}
                    btnType={'button'}
                    btnStyle={'text-[1.8rem] w-full text-center cursor-pointer'}/>

                    {/*filters and sorters */}
                    <div className={'bg-white absolute text-left w-[250px] p-2 rounded-xl right-0  shadow-xl shadow-black'} style={{zIndex:'9'}}>
                        <p>filter</p>
                        <input type={'checkbox'} name={'minFilter'} onChange={handleCheck}></input>
                        <label> R0 to R1000</label>
                        <br></br>
                        <input type={'checkbox'} name={'midFilter'} onChange={handleCheck}></input>
                        <label> R1001 to R2000</label>
                    </div>
                </div>

            </div>

            <div className={'lg:flex justify-between items-start'}>

                <div className={'hidden lg:block w-[25%] h-[100vh] pt-5 bg-gray-200 rounded-xl px-2 box-border relative'}>

                    <Input
                    inputType={'text'}
                    inputValue={searchText}
                    inputChange={handleChange}
                    inputStyle={'border-1 w-[100%] box-border py-2 rounded-xl outline-none px-2'}/>

                    <Button
                    btnInnerText={value.icons[0].icon}
                    btnStyle={'absolute top-6 right-3 bg-blue-600 py-1 px-4 rounded-xl cursor-pointer'}/>

                </div>

                <div className={'lg:w-[73%] lg:pt-5 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-4'}>
                    {
                        servicesOffered.length > 0 ? servicesOffered.map((each)=>{

                            const imageContainerStyle = 'h-[300px] md:h-[200px] relative'

                            const cardStyle = 'bg-white shadow-gray-400 shadow-xl/30 p-2 box-border p-4 rounded-xl'

                            return each.category !== "flights" && each.category !== "buses" ?
                            <ServiceStayCard
                            key={`searchServices${each._id}`}
                            cardStyle={cardStyle}
                            imageContainerStyle={imageContainerStyle}
                            imageURL={each.imageURL}
                            title={each.title}
                            country={each.location.country}
                            city={each.location.city}
                            price={each.price}
                            description={each.description}
                            serviceURL={``}
                            bookingURL={``}
                            imageStyle={'h-full w-full object-cover rounded-xl'}
                            infoStyle={'py-2 px-1 font-bold'}
                            />
                            :
                            <ServiceTravelCard
                            key={`servicesSearch${each._id}`}
                            cardStyle={cardStyle}
                            imageContainerStyle={imageContainerStyle}
                            imageURL={each.imageURL}
                            title={each.title}
                            price={each.price}
                            depart={`${each.location.country}, ${each.location.city}, ${each.uniqueFeatures.tripFromAddress.streetName}, ${each.uniqueFeatures.tripFromAddress.postCode}`}
                            arrival={`${each.uniqueFeatures.tripToAddress.country}, ${each.uniqueFeatures.tripToAddress.city}, ${each.uniqueFeatures.tripToAddress.streetName}, ${each.uniqueFeatures.tripToAddress.postCode}`}
                            serviceURL={``}
                            bookingURL={``}
                            imageStyle={'h-full w-full object-cover rounded-xl'}
                            infoStyle={'py-4 px-2 font-bold'}/>
                        }):<p>No services found</p>
                    }
                </div>

            </div>

        </div>
    )

}

export default SearchPage