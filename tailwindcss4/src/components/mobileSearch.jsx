//returns a search from for  mobile screen size through conditional rendering
import Input from "./input"
import Button from "./button"
import {createPortal} from "react-dom"

function MobileSearchForm(props){

    return (
        createPortal(
        <>
            {props.showForm && <div className={'h-[100vh] w-[100%] md:hidden top-0 fixed'} style={{backgroundColor:'rgba(0,0,0,0.8)',zIndex:'20'}}>
                <form className={'bg-white relative w-[90%] m-auto top-[25%] p-5 rounded-xl'}>
                    <Input 
                    inputType={'text'} 
                    inputValue={props.inputValue}
                    inputChange={props.handleChange}
                    inputStyle={'border-2 w-[100%] py-2 px-2 box-border outline-none rounded-xl'}
                    />
                    <br></br>
                    <br></br>

                    <Button btnInnerText={'Close'} handleClick={()=>props.toggleForm(props.state)} btnType={'button'} btnStyle={'px-4 py-2 rounded bg-red-500 cursor-pointer'}/>
                    <Button btnInnerText={'Search'} handleClick={props.handleSearch} btnType={'button'} btnStyle={'ml-5 px-4 py-2 rounded bg-blue-500 cursor-pointer'}/>

                </form>
            </div>}
        </>
    ,document.getElementById("modal"))
    )

}

export default MobileSearchForm