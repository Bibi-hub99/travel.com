import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../pages/home"

import {findOffers} from "../crud/offers"

const routerPages = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                loader:findOffers,
                element:<Home/>,
            },
            {
                path:''
            }
        ]
    }
])

export default routerPages