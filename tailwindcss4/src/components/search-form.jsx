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
                />

            </div>
            <div className={'relative'}>
                <div className={'bg-gray-200 mt-1 w-[84%] p-2 box-border rounded absolute'} style={{zIndex:'7'}}>
                    {props.children}
                </div>
            </div>
        </form>
    )

}

export default SearchForm