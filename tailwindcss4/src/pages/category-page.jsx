import CategoryNav from "../components/category-nav"
import {Outlet} from "react-router-dom"

function CategoryPage(){


    return (
        <div className={'mt-18 w-[98%] ml-[1%]'}>
            <CategoryNav/>
            <Outlet/>
        </div>
    )

}

export default CategoryPage