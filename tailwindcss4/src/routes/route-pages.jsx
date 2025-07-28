import {createBrowserRouter} from "react-router-dom"
import Layout from "../layout/layout"
import Home from "../pages/home"
import {Suspense,lazy} from "react"
import Loading from "../loaders/loading"
import ServiceProviderSignUp from "../pages/service-provider-signUp"
import UserSignUp from "../pages/user-sign-form"

import {homeRequests} from "../crud/home-requests"
import {findServices} from "../crud/booking"
import BookingService from "../pages/booking-service"


const BookingPage = lazy(()=>import("../pages/booking-page"))
const CategoryPage = lazy(()=>import("../pages/category-page"))
const DynamicCategory  = lazy(()=>import("../pages/dynamic-category"))
const AllServicesPage = lazy(()=>import("../pages/all-services"))
const CategoryIndex = lazy(()=>import("../pages/category-index"))
const SingleServicePage = lazy(()=>import("../pages/single-service"))
const ServiceInfoPage = lazy(()=>import("../pages/service-informationPage"))
const SearchPage = lazy(()=>import("../pages/search-page"))
const LoginPage = lazy(()=>import("../pages/login"))
const SignUpPage = lazy(()=>import("../pages/sign-up"))
const BookService = lazy(()=>import("../pages/booking-service"))

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
    },
    {
        path:'booking/service/information/:serviceID',
        element:(
            <Suspense fallback={<Loading/>}>
                    <SingleServicePage urlLink={'../../..'} isRelative={true}/>
                </Suspense>
        ),
        children:[
            {
                index:true,
                element:(
                    <Suspense fallback={<Loading/>}>
                        <ServiceInfoPage/>
                    </Suspense>
                )
            }
        ]
    },
    {
        path:'booking/categories/service/information/:serviceID',
        element:(
            <Suspense fallback={<Loading/>}>
                <SingleServicePage urlLink={'../../..'} isRelative={true}/>
            </Suspense>
        )
    },
    {
        path:'services/search',
        element:(
            <Suspense fallback={<Loading/>}>
                <SearchPage/>
            </Suspense>
        )
    },
    {
        path:'login',
        element:(
            <Suspense fallback={<Loading/>}>
                <LoginPage/>
            </Suspense>
        )
    },
    {
        path:'sign-up',
        element:(
            <Suspense fallback={<Loading/>}>
                <SignUpPage/>
            </Suspense>
        ),
        children:[
            {
                index:true,
                element:<UserSignUp/>
            },
            {
                path:'service-provider',
                element:<ServiceProviderSignUp/>
            }
        ]
    },
    {
        path:"booking/service/booking-type/:serviceID",
        element:(
            <Suspense>
                <BookingService/>
            </Suspense>
        )
    }
])

export default routerPages