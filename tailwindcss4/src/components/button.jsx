function Button(props){
    //for creating buttons in the app and perfom function passed to it
    return <button type={props.btnType} className={`${props.btnStyle}`} onClick={props.handleClick}>{props.btnInnerText}</button>

}

export default Button