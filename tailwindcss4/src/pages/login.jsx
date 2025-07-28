//returns a login page in the app

import { FaUserEdit } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import Input from "../components/input"
import Button from "../components/button"
import {useNavigate,Link} from "react-router-dom"
import {useState,useEffect} from "react"

function LoginPage(){

    const navigate = useNavigate()

    const [credentials,setCredentials] = useState({
        username:'',
        password:''
    })

    const goBack = ()=>{
        navigate(-1)
    }

    const handleChange = (evt) => {
        const {name,value} = evt.target
        setCredentials((oldValue)=>{
            return {
                ...oldValue,
                [name]:value
            }
        })
    }

    const handleSubmit = (evt)=>{
        evt.preventDefault()
        console.log("log in")
    }

    return (
        <div>

            <div className={'bg-blue-500 py-2 px-2 box-border fixed top-0 w-full z-20'}>
                <Button btnInnerText={'back'} handleClick={goBack} btnStyle={'bg-blue-400 py-2 px-5 rounded-xl cursor-pointer'}/>
            </div>

            <div className={'relative font-medium h-[100vh] text-center flex flex-col items-center justify-center px-2 box-border'}>

                    <div className={'w-[100%] md:w-[70%] lg:w-[50%] shadow-gray-400 shadow-xl bg-white py-2 px-2 box-border rounded-xl'}>
                        <h2>Enter Login details</h2>
                        <br></br>
                        <form name={'login-form'} autoComplete={"off"}>
                        
                            <div className={'flex'}>
                                <label className={'bg-blue-400 w-[20%] border-1 text-[1.8rem] text-center rounded-l-xl'}><FaUserEdit className={'inline text-[1.9rem]'}/></label>
                                <Input
                                inputType={'text'}
                                inputName={'username'}
                                inputValue={credentials.username}
                                inputChange={handleChange}
                                inputStyle={'border-1 rounded-r-xl outline-none w-[80%] px-2 box-border'}/>
                            </div>
                            <br></br>
                            <br></br>
                            <div className={'flex'}>
                                <label className={'bg-blue-400 w-[20%] border-1 text-[1.8rem] text-center rounded-l-xl'}><RiLockPasswordFill className={'inline text-[1.9rem]'}/></label>
                                <Input
                                inputType={'password'}
                                inputName={'password'}
                                inputValue={credentials.password}
                                inputChange={handleChange}
                                inputStyle={'border-1 rounded-r-xl outline-none w-[80%] px-2 box-border'}/>
                            </div>
                            <br></br>
                            <Button btnType={'submit'} handleClick={handleSubmit} btnInnerText={'Login'} btnStyle={'bg-black text-white py-2 px-5 rounded-xl cursor-pointer'}/>
                            <br></br>
                            <br></br>
                            <p>don't have an account ? don't worry <Link to={'../sign-up'} className={'text-blue-500 hover:underline'}>Sign Up</Link></p>
                        </form>
                    </div>

            </div>

            <div>

            </div>

        </div>
    )

}

export default LoginPage