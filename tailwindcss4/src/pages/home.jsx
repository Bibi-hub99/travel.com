import PcSearchForm from "../components/pc-search-form"
import Trends from '../components/trends'
import {Link,Await,useLoaderData} from "react-router-dom"
import {Suspense,useState,useEffect} from "react"
import {useMyContext} from "../context/context"
import ComponentLoader from "../loaders/component-loader"
import OfferCard from "../components/offer-card"
import DestinationCard from "../components/destination-card"
import ServiceTypeCard from "../components/service-types-card" 
import CompanyValueCard from "../components/company-value-card"
import serviceTypes from "../mockups/service-type"
import companyValues from "../mockups/company-values" 
import HomeLogin from "../components/home-login"

/*renders a home page to the browser*/

function Home(){

    const {results} = useLoaderData()
    const [availableOffers,setAvailableOffers] = useState([])//for storing offers once request is complete
    const [trendingDestinations,setTrendingDestinations] = useState([])//for storing trending locations once request is complete

    const [value,logOut,isLogged] = useMyContext()//import from Context API

    const background1 = 'bg-[url(https://media.istockphoto.com/id/2222211983/photo/durban-beachfront-cityscape-with-skyscrapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yj4dyUypCMO3Q6cfHUVodSjPNxPdnLqW86J561aqQUM=)]'

    const serviceTypesMaps = serviceTypes.map((each)=>{
        return (
            <ServiceTypeCard key={`serviceTypes${each.id}`}
             imageURL={each.imageURL} 
             imageStyle={'h-full w-[100%] object-cover rounded-xl'}
             title={each.title}
             />
        )
    })

    const companyValuesMaps = companyValues.map((each)=>{
        return (
            <CompanyValueCard
            title={each.title}
            description={each.description}
            imageStyle={'h-full w-full object-cover'} 
            key={`company-values${each.id}`}
            imageURL={each.imageURL}/>
        )
    })


    return (


        <Suspense fallback={<ComponentLoader/>}>

            <Await resolve={results}>
                {

                    (response)=>(

                            <div>
                                <div>
                                    {/*setting the values of states before working with them,they derive from a  promise all function hence the arrays format */}
                                    {
                                        
                                        useEffect(()=>{
                                            setAvailableOffers(response[0].data.offers)
                                            setTrendingDestinations(response[1].data.locations)
                                        },[])
                                    }
                                </div>
                                <div className={'h-[100vh] md:h-[80vh] relative'}>

                                    <div className={`h-[100%] md:h-[90%] ${background1} bg-no-repeat bg-cover bg-center relative flex flex-col justify-center`} >
                                        <div className={'text-center font-bold text-white text-[1.2rem] text-shadow-black text-shadow-lg md:text-[1.5rem]'}>
                                            <h2 className={''}>Explore the world with our help, all organized in a simple and lovely way</h2>
                                            <br></br>
                                            <Link className={'underline px-2 py-1 rounded-[.5rem]'} to={'booking'}>Book Anything</Link>
                                            <br></br>
                                            <br></br>
                                            <p>Or</p>
                                            <h2>List your property or service</h2>
                                            <br></br>
                                            <Link className={'underline px-2 py-1 rounded-[.5rem]'} to={'service-provider'}>List property</Link>
                                        </div>
                                    </div>

                                    <div className={`h-[0%] md:h-[10%] `}>
                                        {/* left blank deliberately to create a white space*/}
                                    </div>

                                    {/*Pc search form displayed in home page for query */}
                                    <PcSearchForm/>

                                </div>

                                <Trends heading={'Offers'} trendStyle={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mb-20'}>
                                    
                                    {availableOffers.map((each)=>{
                                        return <OfferCard 
                                        offerTitle={each.title} 
                                        offerDescription={each.description} 
                                        key={`offers-${each._id}`}
                                        imageURL={'https://media.istockphoto.com/id/2193131688/photo/large-luxurious-villa-with-swimming-pool-in-middle-east.jpg?s=612x612&w=0&k=20&c=ntsqXhiVjvYbYWKreLWLPaLOiSSg6RVTcbcREk8Aqfs='}
                                        offerCategory={each.category}
                                        offerId={each._id}/>
                                    })}

                                </Trends>


                                <Trends heading={'trending destinations'} trendStyle={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 md:gap-x-5 lg:gap-y-10'}>
                                    {
                                        trendingDestinations.map((each)=>{
                                            return (
                                            <DestinationCard 
                                            cardStyle={'h-[400px] md:h-[350px]'}
                                            imageURL={each.imageURL}
                                            imageStyle={'h-full w-[100%] object-cover rounded-lg'}
                                            destLocation={each.location}
                                            destCountry={each.country}
                                            key={`trendDest${each._id}`}/>
                                            )
                                        })
                                    }
                                </Trends>

                                <Trends heading={'Find by type'} trendStyle={'h-[300px] w-[100%] bg-navy-300 py-2 rounded-xl box-border overflow-x-scroll'} trendContainerStyle={'mt-10'}>
                        
                                    <div className={'flex w-[2000px] h-full gap-1 md:gap-5 slider px-1'}>
                                        {serviceTypesMaps}
                                    </div>

                                </Trends>

                                <div className={`${value.containerStyle} mt-14 mb-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
                                    {companyValuesMaps}
                                </div>

                                <HomeLogin/>

                            </div>

                    )

                }

            </Await>

        </Suspense>

    )

}

export default Home