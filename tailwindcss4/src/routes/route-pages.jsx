import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../pages/home"
import {Suspense,lazy} from "react"
import Loading from "../loaders/loading"

import {homeRequests} from "../crud/home-requests"
import {findServices} from "../crud/booking"


const BookingPage = lazy(()=>import("../pages/booking-page"))
const CategoryPage = lazy(()=>import("../pages/category-page"))
const DynamicCategory  = lazy(()=>import("../pages/dynamic-category"))
const AllServicesPage = lazy(()=>import("../pages/all-services"))
const CategoryIndex = lazy(()=>import("../pages/category-index"))

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
                path:'booking',
                element:(
                    <Suspense fallback={<Loading/>}>
                        <BookingPage/>
                    </Suspense>
                ),
                children:[
                    {
                        index:true,
                        loader:findServices,
                        element:(
                            <Suspense fallback={<Loading/>}>
                                <AllServicesPage/>
                            </Suspense>
                        )
                    }
                ]

            },
            {
                path:'booking/categories',
                element:(
                    <Suspense fallback={<Loading/>}>
                        <CategoryPage/>
                    </Suspense>
                ),
                children:[
                    {
                        index:true,
                        element:(
                            <Suspense fallback={<Loading/>}>
                                <CategoryIndex/>
                            </Suspense>
                        )
                    },
                    {
                        path:":category",
                        element:(
                            <Suspense>
                                <DynamicCategory/>
                            </Suspense>
                        )
                    }
                ]
            },
        ]
    }
])

export default routerPages