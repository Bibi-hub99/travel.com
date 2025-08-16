//builds a dynamic modal
import Button from "../components/button"
import {createPortal} from "react-dom"


function DynamicModal(props){
    return (
        createPortal(
            <>
                {props.updateFormState && <div className={`fixed top-0 w-[100%] h-[100vh] ${props.uniStyle}`} style={{backgroundColor:'rgba(0,0,0,0.8)',zIndex:'38'}}>
                    <div className={`bg-white ${props.uniqueStyle} rounded-xl relative`}>
                        <Button
                        handleClick={props.handleUpdateForm}
                        btnInnerText={'X'}
                        btnStyle={'font-bold absolute right-5 cursor-pointer hover:bg-gray-300 px-4 py-2 rounded-lg'}/>
                        {props.children}
                    </div>
                </div>}
            </>
        ,document.getElementById("dynamic-modal"))
    )
}

export default DynamicModal