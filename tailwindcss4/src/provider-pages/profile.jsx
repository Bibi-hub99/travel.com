//returns a view profile page
import ProfileCard from "../provider-components/profile-card"
import {useMyContext} from "../context/context"
import {useState,useEffect} from "react"
import {getProfileInformation,updateInformation} from "../crud/users"
import DynamicModal from "../components/dynamic-modal"
import Input from "../components/input"
import Button from "../components/button"

function ProfilePage(){

    const [value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType] = useMyContext()
    const [profileInfo,setProfileInfo] = useState({})
    const [changeProfileInfo,setChangeProfileInfo] = useState({
        
    })
    const [updateState,setUpdateState] = useState(false)

    const commonStyle = 'border-1 w-full p-2 box-border rounded-xl'

    useEffect(()=>{
        const getProfileInfo = async(jwtToken) => {
            try{
                const {data} = await getProfileInformation(jwtToken)
                setProfileInfo(data.profileInformation)
            }catch(err){
                console.log(err.message + ' ERROR')
            }
        }
        getProfileInfo(jwtToken)
    },[])

    const toggleChangeProfileInfo = (copyObj) => {
        setChangeProfileInfo({...copyObj})
    }

    const handleUpdateCopy = (state,copyObj,callback) => {

        setUpdateState(state)
        callback(copyObj)

    }

    const handleChange = (evt) => {

        const {name,value} = evt.target

        setChangeProfileInfo((oldValue)=>{

            return {
                ...oldValue,
                [name]:value
            }

        })

    }

    const handleUpdateInformation = async (evt) => {
        evt.preventDefault()
        try{
            const updateObj = {...changeProfileInfo}
            const {data} = await updateInformation({jwtToken,...updateObj})
            setProfileInfo(data.profileInformation)
            handleUpdateCopy(false,{},toggleChangeProfileInfo)
        }catch(err){

        }
    }


    return (
        <div>
            <ProfileCard
            handleUpdateForm={()=>handleUpdateCopy(true,profileInfo,toggleChangeProfileInfo)} 
            email={profileInfo.email} 
            firstNames={profileInfo.firstNames}
            lastName={profileInfo.surname}
            accountType={profileInfo.accountType}
            gender={profileInfo.gender}
            id_number={profileInfo.id_number}
            contacts={profileInfo.telephone}/>
            <DynamicModal uniStyle={''} updateFormState={updateState} handleUpdateForm={()=>handleUpdateCopy(false,{},toggleChangeProfileInfo)}  uniqueStyle={'py-2  px-5 box-border bg-white top-[15%] w-[99%] m-auto md:w-[50%]'}>
                <p className={'text-center'}>Update personal information :</p>
                <br></br>
                <form>

                    <Input
                    inputType={'text'}
                    inputName={'firstNames'}
                    inputStyle={commonStyle}
                    inputChange={handleChange}
                    inputPlaceholder={changeProfileInfo.firstNames || ""}
                    />
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'text'}
                    inputName={'surname'}
                    inputChange={handleChange}
                    inputPlaceholder={changeProfileInfo.surname || ""}
                    inputStyle={commonStyle}
                    />
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'tel'}
                    inputName={'telephone'}
                    inputChange={handleChange}
                    inputPlaceholder={changeProfileInfo.telephone || ""}
                    inputStyle={commonStyle}
                    />
                    <br></br>
                    <br></br>
                    <Input
                    inputType={'text'}
                    inputName={'id_number'}
                    inputChange={handleChange}
                    inputPlaceholder={changeProfileInfo.id_number}
                    inputStyle={commonStyle}/>
                    <br></br>
                    <br></br>
                    
                    <div className={'text-left'}>
                        <input type={'radio'} name={'gender'} value={'male'} onChange={handleChange}></input><label> Male </label>
                        <input type={'radio'} name={'gender'} value={'female'} onChange={handleChange}></input><label> Female</label>
                    </div>
                    <br></br>
                    <div className={'text-center'}>
                        <Button
                        handleClick={handleUpdateInformation}
                        btnInnerText={"Update"}
                        btnStyle={"bg-black py-2 px-5 w-[90%] rounded-xl text-white hover:bg-gray-900 cursor-pointer"}/>

                    </div>

                </form>
            </DynamicModal>
        </div>
    )

}

export default ProfilePage