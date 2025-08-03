import Input from "../components/input"

function AddServiceForm(props){

    const commonStyle = 'border-1 w-full py-2 px-2 box-border rounded-xl outline-none'

    return (
        <div>

            <form>

                <Input
                inputType={'text'}
                inputName={'title'}
                inputStyle={commonStyle}
                inputPlaceholder={'Service Title...'}
                />
                <br></br>
                <br></br>

                <Input
                inputType={'text'}
                inputName={'price'}
                inputStyle={commonStyle}
                inputPlaceholder={'R 1000.00'}/>

                <br></br>
                <br></br>

                <Input
                inputType={'text'}
                inputName={'imageURL'}
                inputStyle={commonStyle}
                inputPlaceholder={'Image URL'}/>

                <br></br>
                <br></br>

                <select name={'category'} className={commonStyle}>

                    <option value={''}>--Select Category--</option>
                    <option value={'stays'}>APARTMENT</option>
                    <option value={'flights'}>FLIGHT</option>
                    <option value={'buses'}>BUS</option>
                    <option value={'activities'}>ACTIVITIY</option>

                </select>

            </form>

        </div>
    )

}

export default AddServiceForm