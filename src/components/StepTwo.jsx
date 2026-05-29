import React from 'react'
import FormField from './FormField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
import PasswordStrength from './PasswordStrength'

const StepTwo = ({formData, errors, touched, onChange, onBlur}) => {
    const [showPassword, setShowPassword] = React.useState(false)
    function handleTogglePassword() {
        setShowPassword(prev => !prev)
    }
  return (
    <div>
        <header className="step-title">
            Secure your account
        </header>

        <p className="step-subtitle">
            Choose your login credentials and create a strong password.
        </p>

        <FormField 
            label={"Email"} 
            error={errors.email} 
            touched={touched.email} 
            value={formData.email} 
            success="Valid email address"
        >
            <input 
                type="email" 
                value={formData.email} 
                onChange={(e) => onChange("email", e.target.value)} 
                onBlur={() => onBlur("email")}
            />
        </FormField>

        <FormField 
            label={"Username"} 
            error={errors.username} 
            touched={touched.username} 
            value={formData.username} 
            success="Username looks good" 
        >
            <input 
                type="text" 
                value={formData.username} 
                onChange={(e) => onChange("username", e.target.value)} 
                onBlur={() => onBlur("username")} 
            />
        </FormField>

        <FormField 
            label={"Password"} 
            error={errors.password} 
            touched={touched.password} 
            value={formData.password} 
            success="Strong password" 
        >
            <div className="password-wrapper">
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={formData.password} 
                    onChange={(e) => onChange("password", e.target.value)} 
                    onBlur={() => onBlur("password")} 
                />
                <button 
                    type='button' 
                    className='toggle-password' 
                    onClick={handleTogglePassword}
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>
            </div>

            <PasswordStrength password={formData.password} />
        </FormField>
    </div>
  )
}

export default StepTwo