import Button from "./button"
import Input from "./input"

function SearchForm(props){

    return (
        <form name={'search-form'} className={props.formStyle}>
            <Input
            inputType={'text'}
            inputStyle={'border-1 w-[100%] py-2 rounded-xl'}/>
        </form>
    )

}

export default SearchForm