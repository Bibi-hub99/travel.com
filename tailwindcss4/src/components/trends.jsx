import {useMyContext} from "../context/context"


function Trends(props){

    const [value,logout,isLogged] = useMyContext()

    //for rendering weekly and new offers e.g offers,categories and what's new or coming soon

    return (
        <div className={`${value.containerStyle} ${props.trendContainerStyle}`}>
            <h2 className={'text-2xl'}>{props.heading}</h2>
            <br></br>
            <div className={`${props.trendStyle}`}>
                {props.children}
            </div>
        </div>
    )

}

export default Trends