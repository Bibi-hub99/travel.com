import Navigation from "../components/navigation"
import {useMyContext} from "../context/context"
import {Outlet} from "react-router-dom"

function Layout(){

    /*
    layout for shared screen routes changes body parts and remain still the navigation bar and
    footer
     */

    return (
        <div>
            <Navigation/>
            <Outlet/>
        </div>
    )

}

export default Layout