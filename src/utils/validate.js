export function validateStep(step, formData){
    const errors = {}

    if (step === 1){
        if (!formData.firstName.trim() || formData.firstName.trim().length < 2){
            errors.firstName = "First name must be at least 2 characters"
        }

        if (!formData.lastName.trim() || formData.lastName.trim().length < 2){
            errors.lastName = "Last name must be at least 2 characters"
        }

        if (!formData.phone.trim()) {
            errors.phone = "Phone number is required"
        } else {
            const validPhone = /^\d{10,15}$/.test(formData.phone)
            if (!validPhone) {
                errors.phone = "Enter a valid phone number"
            }
        }
    }else if(step === 2){
        if(!formData.email.trim()){
            errors.email = "Email is required"
        }else {
            const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)
            if(!validEmail){
                errors.email = "Enter a valid email address"
            }
        }

        if(!formData.username.trim()){
            errors.username = "username is required"
        }else if(formData.username.length < 3){
            errors.username = "username must be at least 3 characters"
        } else {
            const validUserName = /^[a-zA-Z0-9_]+$/.test(formData.username)
            
            if(!validUserName){
                errors.username = "Only letters, numbers and underscores allowed"
            }
        }

        if(!formData.password.trim()){
            errors.password = "Password is required"
        }else if (formData.password.length < 8){
            errors.password = "Password must be at least 8 characters"
        }
    }

    return errors
}

export function getPasswordStrength(password){
    let score = 0

    if(!password) return score

    if(password.length >= 8){
        score += 1
    }

    const hasNumber = /\d/.test(password)
    if(hasNumber){
        score += 1
    }

    const hasUpperCase = /[A-Z]/.test(password)
    if(hasUpperCase){
        score += 1
    }

    const hasSpecialCharacter = /[!@#$%^&*(),.?":{}|<>]/.test(password)
    if(hasSpecialCharacter){
        score += 1
    }

    return score
}