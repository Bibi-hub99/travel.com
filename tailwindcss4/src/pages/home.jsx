import PcSearchForm from "../components/pc-search-form"
import {Link} from "react-router-dom"

function Home(){

    const background1 = 'bg-[url(https://media.istockphoto.com/id/2222211983/photo/durban-beachfront-cityscape-with-skyscrapers.webp?a=1&b=1&s=612x612&w=0&k=20&c=Yj4dyUypCMO3Q6cfHUVodSjPNxPdnLqW86J561aqQUM=)]'

    return (
        <div>

            <div className={'h-[100vh] relative'}>

                <div className={`h-[80%] ${background1} bg-no-repeat bg-cover bg-center relative flex flex-col justify-center`} >
                    <div className={'text-center font-bold text-white text-[1.2rem] text-shadow-black text-shadow-lg'}>
                        <h2 className={''}>Explore the world with our help, all organized in a simple and lovely way</h2>
                        <br></br>
                        <Link className={'underline px-2 py-1 rounded-[.5rem]'}>Book Now</Link>
                        <br></br>
                        <br></br>
                        <p>Or</p>
                        <h2>List your property or service</h2>
                        <br></br>
                        <Link className={'underline px-2 py-1 rounded-[.5rem]'}>List property</Link>
                    </div>
                </div>

                <div className={`h-[20%] bg-black`}>

                </div>
                <PcSearchForm/>

            </div>

        </div>
    )

}

export default Home