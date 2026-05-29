import React from 'react'
import { getPasswordStrength } from '../utils/validate'

const PasswordStrength = ({password}) => {
    const score = getPasswordStrength(password)
    let label = ""

    if(score === 0 || score === 1){
        label = "Weak"
    }else if(score === 2 || score === 3){
        label = "Medium"
    }else if(score === 4){
        label = "Strong"
    }

    let barClass = ""
    if(score === 0 || score === 1){
        barClass = "weak"
    }else if(score === 2 || score === 3){
        barClass = "med"
    }else if(score === 4){
        barClass = "strong"
    }
  return (
    <>
        {password.length > 0 && <div className='password-strength'>
                                <div className="strength-bars">
                                    <div className={score >= 1 ? barClass : ""}></div>
                                    <div className={score >= 2 ? barClass : ""}></div>
                                    <div className={score >= 3 ? barClass : ""}></div>
                                    <div className={score >= 4 ? barClass : ""}></div>
                                </div>

                                <p className='strength-text'>
                                    {label}

                                    {score <= 1 && " — Use uppercase letters and symbols"}

                                    {score >= 2 && score <= 3 && " — Add more unique characters"}

                                    {score === 4 && " — Excellent password strength"}
                                </p>
                            </div>}
    </>
  )
}

export default PasswordStrength