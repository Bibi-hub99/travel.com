function Input(props){
    //component for building input html tag dynaimally
    return (
        <input type={props.inputType}
         name={props.inputName} 
         className={`${props.inputStyle}`} 
         value={props.inputValue}
         placeholder={props.inputPlaceholder}/>
    )
} 

export default Input