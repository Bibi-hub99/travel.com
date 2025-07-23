import Input from "./input"
import Button from "./button"

function TravelForm(){

    const textStyle = 'border-2 w-[100%] py-1 rounded-md'

    return (
        <form name='travel-form'>

            <div className={'px-2 box-border'}>

                <div className={'flex justify-between box-border'}>

                    <div className={'w-[48%]'}>
                        <Input inputType={'text'}
                        inputName={"depart-city"}
                        inputStyle={textStyle}/>
                    </div>

                    <div className={'w-[48%]'}>
                        <Input inputType={'text'}
                        inputName={"arrival-city"}
                        inputStyle={textStyle}/>
                    </div>

                </div>

                <br></br>

                <Input inputType={'date'} inputStyle={'border-2 py-1 rounded-md w-[100%]'}/>

            </div>

        </form>
    )

}

export default TravelForm