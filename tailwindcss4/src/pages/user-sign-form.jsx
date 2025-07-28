//returns a sign up form for normal user
import Input from "../components/input"
import Button from "../components/button"
import PasswordBanner from "../components/password-banner"
import {isEmailValid,isPassValid} from "../utils/validations-utils"
import {createClientAccount} from "../crud/users"
import {useState} from "react"

function UserSignUp(){

    const commonStyle = 'border-1 w-full p-2 box-border rounded-xl'

    const [passBanner,setPassBanner] = useState(false)
    const [passValidity,setPassValidity] = useState({
        upperCaseValid:false,
        lowerCaseValid:false,
        numberValid:false,
        lengthValid:false
    })

    const [userData,setUserData] = useState({
        email:"",
        password:"",
        accountType:"client"
    })



    const handleChange = (evt)=>{
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
            const {email,password,accountType} = userData
            if(isEmailValid(email)){
                if(isPassValid(password)){
                    const {data} = await createClientAccount({email,password,accountType})
                    console.log(data)
                }
            }
        }catch(err){
            console.log(err)
        }
    }

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


    return (
        <div>
            <form name='user-sign' autoComplete={"off"}>
                <Input
                inputType={"email"}
                inputName={'email'}
                inputPlaceholder={'example123@gmail.com'}
                inputStyle={`${commonStyle}`}
                inputChange={handleChange}/>
                <br></br>
                <br></br>
                <Input
                inputType={'password'}
                inputName={'password'}
                inputPlaceholder={'Password'}
                inputStyle={`${commonStyle}`}
                onKeyUp={trackPassValidity}
                inputChange={handleChange}
                onFocus={()=>setPassBanner(true)}
                onBlur={()=>setPassBanner(false)}
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
                <Button 
                btnInnerText={'Register'}
                btnType={'submit'}
                handleClick={handleSubmit}
                btnStyle={'bg-black py-2 w-[90%] block m-auto rounded-xl cursor-pointer text-white hover:bg-gray-900'}/>
            </form>
        </div>
    )

}

export default UserSignUp