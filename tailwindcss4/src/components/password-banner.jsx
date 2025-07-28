//returns a  banner for password requirements


function PasswordBanner(props){

    const upperCaseValid = props.upperCase ? "text-green-500":"text-red-500"
    const lowerCaseValid = props.lowerCase ? "text-green-500":"text-red-500"
    const numberValid = props.number ? "text-green-500":'text-red-500'
    const lengthValid = props.length ? "text-green-500":"text-red-500"

    return (
        <div className={'absolute w-[100%] bg-white shadow-gray-400 shadow-xl p-2 box-border'}>
            <p>password must have the following:</p>
            <p className={upperCaseValid}>At least one uppercase</p>
            <p className={lowerCaseValid}>At least one lowercase</p>
            <p className={numberValid}>At least a number</p>
            <p className={lengthValid}>minimum of 8 characters</p>
        </div>
    )

}

export default PasswordBanner