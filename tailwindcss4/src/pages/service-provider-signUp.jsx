//returns a sign up form for a service provider
import Input from "../components/input"
import Button from "../components/button"
import PasswordBanner from "../components/password-banner"
import {isEmailValid, isNamesValid,isNumberValid, isPassValid} from "../utils/validations-utils.jsx"
import {useState} from "react"
import { createServiceAccount } from "../crud/users.jsx"

function ServiceProviderSignUp(){

    const commonStyle = 'border-1 w-full p-2 box-border rounded-xl'

    const [passBanner,setPassBanner] = useState(false)
    const [passValidity,setPassValidity] = useState({
        upperCaseValid:false,
        lowerCaseValid:false,
        numberValid:false,
        lengthValid:false
    })

    const [userData,setUserData] = useState({
        firstNames:"",
        surname:"",
        telephone:"",
        email:"",
        password:"",
        accountType:"service_provider",
        gender:"",
        id_number:"",
    })

    console.log(userData)

    const trackPassValidity = ()=>{

        const {password} = userData

        password.match(/[A-Z]/g) ?
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                upperCaseValid:true
            }
        })
        :
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                upperCaseValid:false
            }
        })
        
        password.match(/[a-z]/g) ?
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                lowerCaseValid:true
            }
        })
        :
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                lowerCaseValid:false
            }
        })

        password.match(/[0-9]/g) ?
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                numberValid:true
            }
        })
        :
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                numberValid:false
            }
        })

        password.length >= 8 ?
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                lengthValid:true
            }
        })
        :
        setPassValidity((oldValue)=>{
            return {
                ...oldValue,
                lengthValid:false
            }
        })

    }

    const validateForm = ()=>{
        
            if(isNamesValid(userData.firstNames,"First Names")){

                if(isNamesValid(userData.surname,"Surname")){

                    if(isNumberValid(userData.telephone,"Cellphone")){
                        
                        if(isEmailValid(userData.email)){
                            if(isPassValid(userData.password)){
                                return true
                            }
                        }

                    }

                }

            }
    }

    const handleChange = (evt) => {

        const {name,value} = evt.target
        setUserData((oldValue)=>{
            return {
                ...oldValue,
                [name]:value
            }
        })

    }

    const handleSubmit = async(evt)=>{
        evt.preventDefault()
        try{
            if(validateForm()){
                const {firstNames,surname,telephone,email,password,accountType,id_number,gender} = userData
                const {data} = await createServiceAccount({firstNames,surname,telephone,email,password,accountType,id_number,gender})
                console.log(data)
            }
        }catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <form name={'service-provider-sign-up'} autoComplete={"off"}>

                <fieldset className={'border-1 p-2 box-border'}>
                    <legend className={''}>Personal Details:</legend>
                    <Input
                    inputType={'text'}
                    inputName={'firstNames'}
                    inputStyle={commonStyle}
                    inputPlaceholder={'First Names'}
                    inputChange={handleChange}
                    inputValue={userData.firstNames}/>
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'text'}
                    inputName={'surname'}
                    inputStyle={commonStyle}
                    inputPlaceholder={'Surname'}
                    inputChange={handleChange}
                    inputValue={userData.surname}/>
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'tel'}
                    inputName={'telephone'}
                    inputStyle={commonStyle}
                    inputPlaceholder={'0735861123'}
                    inputChange={handleChange}
                    inputValue={userData.telephone}
                    />
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'text'}
                    inputName={'id_number'}
                    inputPlaceholder={'ID Number'}
                    inputStyle={commonStyle}
                    inputValue={userData.id_number}
                    inputChange={handleChange}/>
                    <br></br>
                    <br></br>
                    <input type={'radio'} name={'gender'} value={'male'} id={'male'} onChange={handleChange}></input>                    
                    <label htmlFor={'male'}> Male</label>
                    <input type={'radio'} className={'ml-2'} name={'gender'} value={'female'} id={'female'} onChange={handleChange}></input>
                    <label htmlFor={'female'}> Female</label>
                    <br></br>
                </fieldset>

                <fieldset className={'border-1 p-2 box-border'}>
                    <legend>Login Credentials:</legend>
                    <Input
                    inputType={'email'}
                    inputName={'email'}
                    inputPlaceholder={'example@gmail.com'}
                    inputStyle={commonStyle}
                    inputChange={handleChange}
                    inputValue={userData.email}
                    />
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'password'}
                    inputName={'password'}
                    inputPlaceholder={'Password'}
                    onFocus={()=>setPassBanner(true)}
                    onBlur={()=>setPassBanner(false)}
                    onKeyUp={trackPassValidity}
                    inputStyle={commonStyle}
                    inputChange={handleChange}
                    inputValue={userData.password}
                    />
                    <br></br>
                    <br></br>
                    <div className={'relative'}>
                        {passBanner && <PasswordBanner 
                        upperCase={passValidity.upperCaseValid}
                        lowerCase={passValidity.lowerCaseValid}
                        number={passValidity.numberValid}
                        length={passValidity.lengthValid}/>}    
                    </div>
                </fieldset>
                <br></br>
                <Button 
                btnInnerText={'Register'} 
                btnType={'submit'}
                handleClick={handleSubmit}
                btnStyle={'bg-black py-2 mt-2 w-[90%] block m-auto rounded-xl cursor-pointer text-white hover:bg-gray-900'}/>

            </form>
        </div>
    )

}

export default ServiceProviderSignUp