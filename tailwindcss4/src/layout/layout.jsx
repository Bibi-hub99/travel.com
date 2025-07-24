import Navigation from "../components/navigation"
import {Outlet,useNavigate} from "react-router-dom"
import {useState} from "react"
import MenuSlider from "../components/menu-slider"
import MobileSearchForm from "../components/mobileSearch"


function Layout(){

    /*
    layout for shared screen routes changes body parts and remain still the navigation bar and
    footer
     */

    const [slideWidth,setSlideWidth] = useState('0')
    const [showSearchForm,setShowSearchForm] = useState(false)
    const [searchText,setSearchText] = useState("")

    const handleSlideWidth = (width)=>{
        setSlideWidth(`${width}%`)
    }

    const toggleForm = (state)=>{
        setShowSearchForm(state)
    }

    const handleChange = (evt) => {
        const {value} = evt.target
        setSearchText(value)
    }

    const navigate = useNavigate()

    const handleSearch = () => {
        navigate(`services/search?searchTerm=${searchText}`)
    }

    return (
        <div>
            <Navigation handleSlideWidth={handleSlideWidth} state={true} toggleForm={toggleForm}/>
            <Outlet context={[searchText,handleChange,handleSearch]}/>
            <MenuSlider slideWidth={slideWidth} handleSlideWidth={handleSlideWidth}/>
            <MobileSearchForm showSearchForm={showSearchForm} handleSearch={handleSearch} handleChange={handleChange} inputValue={searchText} showForm={showSearchForm} state={false} toggleForm={toggleForm}/>
        </div>
    )

}

export default Layout