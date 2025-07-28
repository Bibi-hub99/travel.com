export const isEmailValid = (email) => {

    const emailAccount = `${email}`

    if(emailAccount.trim() !== ""){
        let firstLetter = emailAccount.slice(0,1)
        if(!firstLetter.match(/[0-9]/g)){
            if(emailAccount.length >= 10){
                if(emailAccount.includes('@gmail.com')){
                    return true
                }else{
                    throw "email must include @gmail"
                }
            }else{
                throw "email must have 10 chars or more"
            }
        }else{
            throw "email must begin with letter"
        }
    }else{
        throw 'enter email'
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
                        throw `password must have 8 chars`
                    }
                }else{
                    throw "password must have at least one number"
                }

            }else{
                throw 'must have lowercase'
            }

        }else{
            throw 'must have uppercase'
        }
    }else{
        throw 'enter password'
    }
}

export const isNotEmpty = (input,inputName) =>{
    const inputValue = `${input}`
    if(inputValue.trim() !==""){
        return true
    }
}

export const isLetter = (input) => {
    const inputValue = `${input}`
    if(!inputValue.match(/[0-9]/g)){
        return true
    }
}

export const isNamesValid = (input,inputName) =>{

    const inputValue = `${input}`
    if(isNotEmpty(inputValue,inputName)){
        if(isLetter(input)){
            return true
        }else{
            throw `${inputName} must contain only letters`
        }
    }else{
        throw `Enter your ${inputName}`
    }

}

export const isNumberValid = (input,inputName) => {
    const inputValue = `${input}`
    if(isNotEmpty(inputValue,inputName)){
        if(!isNaN(inputValue)){
            if(inputValue.length === 10){
                return true
            }else{
                throw `${inputName} must have 10 digits`
            }
        }else{
            throw `${inputName} must have digits only`
        }
    }else{
        throw `Enter ${inputName}`
    }
}