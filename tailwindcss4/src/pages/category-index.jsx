//renders a category index page of the category route
import ComponentLoader from "../loaders/component-loader"
import {findByCategory} from "../crud/booking"
import {useState,useEffect} from "react"
import SearchForm from "../components/search-form"

function CategoryIndex(){

    const [servicesOffered,setServicesOffered] = useState([])

    /*useEffect(()=>{

        const findServices = async()=>{
            try{
                const services = await findByCategory('stays')
                console.log(services)
            }catch(err){

            }
        }

        findServices()

    },[])*/

    return (
        <div>
            <SearchForm formStyle={'py-2 px-2 rounded-xl'}/>
        </div>
    )

}

export default CategoryIndex