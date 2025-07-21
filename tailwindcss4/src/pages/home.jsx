import PcSearchForm from "../components/pc-search-form"
import Trends from '../components/trends'
import {Link,Await,useLoaderData} from "react-router-dom"
import {Suspense,useState,useEffect} from "react"
import {useMyContext} from "../context/context"
import OfferLoader from "../loaders/offer-loader"
import OfferCard from "../components/offer-card"

function Home(){

    const {offers} = useLoaderData()
    console.log(offers)
    const [availableOffers,setAvailableOffers] = useState([])
    /*renders a home page to the browser*/

    const [value,logOut,isLogged] = useMyContext()//import from Context API

    const background1 = 'bg-[url(https://media.istockphoto.com/id/2222211983/photo/durban-beachfront-cityscape-with-skyscrapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yj4dyUypCMO3Q6cfHUVodSjPNxPdnLqW86J561aqQUM=)]'

    return (
        <Suspense>
            <Await resolve={offers}>
                {

                (dt)=>(
                    <div>
                        {console.log(dt)}
                        <h1>Hello </h1>
                    </div>
                )

                }
            </Await>
        </Suspense>
    )

    return (


        <Suspense fallback={<OfferLoader/>}>

            <Await resolve={offers}>
                {

                    ({data})=>(

                            <div>
                                {
                                    useEffect(()=>{
                                        setAvailableOffers(data.offers)
                                    },[])
                                }
                                <div className={'h-[100vh] md:h-[80vh] relative'}>

                                    <div className={`h-[100%] md:h-[90%] ${background1} bg-no-repeat bg-cover bg-center relative flex flex-col justify-center`} >
                                        <div className={'text-center font-bold text-white text-[1.2rem] text-shadow-black text-shadow-lg md:text-[1.5rem]'}>
                                            <h2 className={''}>Explore the world with our help, all organized in a simple and lovely way</h2>
                                            <br></br>
                                            <Link className={'underline px-2 py-1 rounded-[.5rem]'}>Book Anything</Link>
                                            <br></br>
                                            <br></br>
                                            <p>Or</p>
                                            <h2>List your property or service</h2>
                                            <br></br>
                                            <Link className={'underline px-2 py-1 rounded-[.5rem]'}>List property</Link>
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
                                        imageURL={each.imageURL}
                                        offerCategory={each.category}
                                        offerId={each._id}/>
                                    })}

                                </Trends>
                              
                                <Trends heading={'trending destinations'}>

                                </Trends>

                            </div>

                    )

                }

            </Await>

        </Suspense>

    )

}

export default Home