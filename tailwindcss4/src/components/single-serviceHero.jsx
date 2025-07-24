function SingleService(props){

    return (
        <div className={`${props.singleServiceStyle} ${value.containerStyle} pt-10 relative`}>
            <NavLink to={`${props.urlLink}`} className={'absolute top-1 left-1 px-5 py-1 rounded-tl-full text-white bg-black'}>Back</NavLink>
            <div className={`h-[400px] rounded-xl`}>
                <Image imageURL={props.imageURL} imageStyle={'h-full w-[100%] object-cover rounded-xl'}/>
            </div>
        </div>
    )

}

export default SingleService