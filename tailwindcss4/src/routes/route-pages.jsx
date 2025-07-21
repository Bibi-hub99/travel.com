import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../pages/home"

import {homeRequests} from "../crud/home-requests"

const routerPages = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                loader:homeRequests,
                element:<Home/>,
            },
            {
                path:''
            }
        ]
    }
])

export default routerPages