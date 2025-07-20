import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../pages/home"

const routerPages = createBrowserRouter([
    {
        path:"/",
        element:<Layout/>,
        children:[
            {
                index:true,
                element:<Home/>,
            },
            {
                path:''
            }
        ]
    }
])

export default routerPages