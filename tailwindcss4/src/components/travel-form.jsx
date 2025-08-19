import Input from "./input"
import Button from "./button"

function TravelForm(props){

    const textStyle = 'border-2 w-[100%] py-1 rounded-md px-2 box-border'

    return (
        <form name='travel-form'>

            <div className={'px-2 box-border'}>

                <div className={'flex justify-between box-border'}>

                    <div className={'w-[48%]'}>
                        <Input inputType={'text'}
                        inputName={"depart"}
                        inputValue={props.depart}
                        inputPlaceholder={'From'}
                        inputChange={props.handleChange}
                        inputStyle={textStyle}/>
                    </div>

                    <div className={'w-[48%]'}>
                        <Input inputType={'text'}
                        inputName={"arrival"}
                        inputValue={props.arrival}
                        inputPlaceholder={'To'}
                        inputChange={props.handleChange}
                        inputStyle={textStyle}/>
                    </div>

                </div>

                <br></br>

                <div className={'flex justify-between'}>     

                    <Input 
                    inputType={'date'}
                    inputName={'date'}
                    inputValue={props.date}
                    inputStyle={'border-2 py-1 rounded-md w-[80%] md:w-[84%] lg:w-[89%]'}
                    inputChange={props.handleChange}
                    />

                    <Button
                    btnType={'submit'}
                    btnInnerText={'search'}
                    handleClick={props.handleSearchTicket}
                    btnStyle={'w-[19%] md:w-[15%] lg:w-[10%] bg-black text-white rounded-lg cursor-pointer hover:bg-gray-800'}/>

                </div>

            </div>

        </form>
    )

}

export default TravelForm