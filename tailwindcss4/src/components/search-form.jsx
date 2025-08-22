import Button from "./button"
import Input from "./input"
import {useMyContext} from "../context/context"

function SearchForm(props){

    const [value] = useMyContext()

    return (
        <form name={'search-form'} className={`relative ${props.formStyle}`}>

            <div className={'flex justify-between'}>

                <Input
                inputType={'text'}
                inputName={'searchText'}
                inputValue={props.inputValue}
                inputChange={props.handleChange}
                inputStyle={'border-1 w-[69%] py-2 rounded-xl outline-none px-2 box-border'}
                />


                <Button
                btnType={'button'}
                btnInnerText={value.icons[0].icon}
                btnStyle={'bg-black text-white w-[15%] rounded-xl cursor-pointer'}
                handleClick={props.handleSearch}
                />

                
                <Button
                btnInnerText={'clear'}
                btnType={'button'}
                btnStyle={'w-[15%] hover:bg-gray-300 hover:text-black cursor-pointer px-2 py-1 rounded-xl bg-red-400 text-white box-border'}
                handleClick={props.handleClearSearch}
                />


            </div>

        </form>
    )

}

export default SearchForm