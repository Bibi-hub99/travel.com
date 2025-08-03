//returns a view profile page
import ProfileCard from "../provider-components/profile-card"
import {useMyContext} from "../context/context"
import {useState,useEffect} from "react"
import {getProfileInformation} from "../crud/users"

function ProfilePage(){

    const [value,jwtToken,setJwtToken,expIn,setExpIn,accountType,setAccountType] = useMyContext()
    const [profileInfo,setProfileInfo] = useState({})

    console.log(profileInfo)

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

    return (
        <div>
            <ProfileCard 
            email={profileInfo.email} 
            firstNames={profileInfo.firstNames}
            lastName={profileInfo.surname}
            accountType={profileInfo.accountType}
            gender={profileInfo.gender}
            id_number={profileInfo.id_number}
            contacts={profileInfo.telephone}/>
        </div>
    )

}

export default ProfilePage