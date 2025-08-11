import Input from "../components/input"
import Button from "../components/button"
import {useMyContext} from "../context/context"
import { IoLocationSharp } from "react-icons/io5";


function AddServiceForm(props){

    const commonStyle = 'border-1 w-full py-2 px-2 box-border rounded-xl outline-none'

    const [value] = useMyContext()

    return (
        <div>
 
            <form name='add-service' autoComplete={'off'}>

                <Input
                inputType={'text'}
                inputName={'title'}
                inputValue={props.title}
                inputChange={props.handleChange}
                inputStyle={commonStyle}
                inputPlaceholder={'Service Title...'}
                />
                <br></br>
                <br></br>

                <textarea 
                className={`${commonStyle} resize-none`} 
                placeholder={'description'}
                name={'description'}
                onChange={props.handleChange}
                value={props.description}></textarea>
                <br></br>
                <br></br>

                <Input
                inputType={'text'}
                inputName={'price'}
                inputValue={props.price}
                inputChange={props.handleChange}
                inputStyle={commonStyle}
                inputPlaceholder={'R 1000.00'}/>

                <br></br>
                <br></br>

                <Input
                inputType={'text'}
                inputName={'imageURL'}
                inputValue={props.imageURL}
                inputChange={props.handleChange}
                inputStyle={commonStyle}
                inputPlaceholder={'Image URL'}/>

                <br></br>
                <br></br>

                <select name={'category'} value={props.category} className={commonStyle} onChange={props.handleChange}>

                    <option value={''}>--Select Category--</option>
                    <option value={'stays'}>APARTMENT</option>
                    <option value={'flights'}>FLIGHT</option>
                    <option value={'buses'}>BUS</option>
                    <option value={'activities'}>ACTIVITIY</option>

                </select>

                <br></br>
                {
                    props.isAccomodation && <div className={'relative'}>
                        <br></br>
                        <Input
                        inputType={'text'}
                        inputName={'location'}
                        inputValue={props.location}
                        inputChange={props.handleChange}
                        inputStyle={commonStyle + ' px-7 box-border'}
                        inputPlaceholder={'Country,City,Street Name,Post Code'}/>
                        <IoLocationSharp className={'absolute top-9 text-2xl left-1'}/>
                    </div>
                }
                <br></br>

                {
                    !props.isAccomodation && <div className={''}>
                        <label>Depart {value.icons[11].icon}:</label>
                        <br></br>

                        <div className={'flex justify-between relative'}>
                            <Input

                            inputType={'text'}
                            inputName={'departAddress'}
                            inputValue={props.departAddress}
                            inputChange={props.handleChange}
                            inputStyle={'border-1 w-[49%] py-2 rounded-xl px-7 box-border'}
                            inputPlaceholder={'Country,City,Street Name,Post Code'}/>
                            <Input
                            inputType={'datetime-local'}
                            inputName={'departTime'}
                            inputValue={props.departTime || ""}
                            inputChange={props.handleChange}
                            inputStyle={'border-1 w-[49%] py-2 rounded-xl'}
                            inputPlaceholder={'depart'}/>
                            <IoLocationSharp className={'absolute top-2.5 text-2xl left-1'}/>
                        </div>
                        <br></br>
                        <label>Arrival {value.icons[12].icon}:</label>
                        <div className={'flex justify-between relative'}>
                            <Input
                            inputType={'text'}
                            inputName={'arrivalAddress'}
                            inputValue={props.arrivalAddress}
                            inputChange={props.handleChange}
                            inputStyle={'w-[49%] border-1 rounded-xl py-2 px-7 box-border'}
                            inputPlaceholder={'Country,City,Street Name, Post Code'}/>
                            <Input
                            inputType={'datetime-local'}
                            inputName={'arrivalTime'}
                            inputValue={props.arrivalTime}
                            inputChange={props.handleChange}
                            inputStyle={'w-[49%] border-1 rounded-xl py-2'}/>
                            <IoLocationSharp className={'absolute top-2.5 text-2xl left-1'}/>
                        </div>

                    </div>
                }

                <div className={'my-5'}>
                    <Button
                    btnInnerText={'Add'}
                    btnType={'button'}
                    handleClick={props.handleClick}
                    btnStyle={'bg-black text-white px-5 py-2 rounded-xl w-full cursor-pointer hover:bg-gray-900'}/>
                </div>

            </form>

        </div>
    )

}

export default AddServiceForm