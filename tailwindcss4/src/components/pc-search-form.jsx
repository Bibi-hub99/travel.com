import Input from "./input"
import Button from "./button"

function PcSearchForm(){

    //form for handling search query and input displayed in PC

    return (
        <form name={''} className={'bg-white absolute top-[76%] py-1 w-[90%] lg:w-[70%] ml-[5%] lg:ml-[15%] rounded-full shadow-xl/20'}>

            <div className={'w-[95%] m-auto relative'}>
                <Input
                inputName={'search-some'}
                inputStyle={'w-[100%] py-3 rounded-full box-border border-gray-500 outline-none px-5'}
                inputPlaceholder={'Search Something Brand,Town,City,Address...'}
                />
                <Button
                btnInnerText={'Search...'}
                btnStyle={'absolute right-3 top-[10%] bg-black py-2 px-5 rounded-full text-white cursor-pointer'}/>
            </div>

        </form>
    )

}

export default PcSearchForm