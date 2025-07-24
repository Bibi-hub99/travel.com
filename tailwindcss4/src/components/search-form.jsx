import Button from "./button"
import Input from "./input"
import {useMyContext} from "../context/context"

function SearchForm(props){

    const [value] = useMyContext()

    return (
        <form name={'search-form'} className={props.formStyle}>
            <div className={'flex justify-between'}>

                <Input
                inputType={'text'}
                inputValue={props.inputValue}
                inputChange={props.inputChange}
                inputStyle={'border-1 w-[84%] py-2 rounded-xl outline-none px-2 box-border'}
                />

                <Button
                btnType={'button'}
                btnInnerText={value.icons[0].icon}
                btnStyle={'bg-black text-white w-[15%] rounded-xl cursor-pointer'}
                handleClick={props.handleSubmit}
                />

            </div>

        </form>
    )

}

export default SearchForm