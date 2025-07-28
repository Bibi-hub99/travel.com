
export const isEmailValid = (email) => {

    const emailAccount = `${email}`

    if(emailAccount.trim() !== ""){
        let firstLetter = emailAccount.slice(0,1)
        if(!firstLetter.match(/[0-9]/g)){
            if(emailAccount.length >= 10){
                if(emailAccount.includes('@gmail.com')){
                    return true
                }else{
                    console.log("email must include @gmail")
                    return false
                }
            }else{
                console.log("email must have 10 chars or more")
                return false
            }
        }else{
            console.log("email must begin with letter")
            return false
        }
    }else{
        console.log('enter email')
        return false
    }

}

export const isPassValid = (password) => {
    const userPassword = `${password}`
    if(userPassword.trim()!==""){

        if(userPassword.match(/[A-Z]/g)){

            if(userPassword.match(/[a-z]/g)){

                if(userPassword.match(/[0-9]/g)){
                    if(userPassword.length >= 8){
                        return true
                    }else{
                        console.log('must have 8 chars')
                    }
                }else{
                    console.log("must have numbers")
                    return false
                }

            }else{
                console.log('must have lowercase')
                return false
            }

        }else{
            console.log('must have uppercase')
            return false
        }
    }else{
        console.log('enter password')
        return false
    }
}

export const isNotEmpty = (input,inputName) =>{
    const inputValue = `${input}`
    if(inputValue.trim() !==""){
        return true
    }else{
        console.log('enter '+inputName)
        return false
    }
}

export const isLetter = (input) => {
    const inputValue = `${input}`
    if(!inputValue.match(/[0-9]/g)){
        return true
    }else{
        console.log('must start with a letter')
        return false
    }
}

export const isNamesValid = (input,inputName) =>{

    const inputValue = `${input}`
    if(isNotEmpty(inputValue,inputName)){
        if(isLetter(input)){
            return true
        }
    }

}

export const isNumberValid = (input) => {
    const inputValue = `${input}`
    if(isNotEmpty(inputValue)){
        if(!isNaN(inputValue)){
            return true
        }
    }
}