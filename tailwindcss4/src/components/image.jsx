function Image(props){

    return (
        <img src={props.imageURL} alt={props.imageAlt} className={props.imageStyle}>
        </img>
    )

}

export default Image