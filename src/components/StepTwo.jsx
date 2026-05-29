import React from 'react'
import FormField from './FormField'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye, faEyeSlash, faCheck, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
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
            label="Password"
            error={errors.password}
            touched={touched.password}
        >
            <div className="password-wrapper">
                <input 
                    type={showPassword ? "text" : "password"} 
                    value={formData.password} 
                    onChange={(e) => onChange("password", e.target.value)} 
                    onBlur={() => onBlur("password")} 
                />
                
                {/* The Toggle Eye Button */}
                <button 
                    type='button' 
                    className='toggle-password' 
                    onClick={handleTogglePassword}
                >
                    <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                </button>

                {/* Fixed context variables below from props -> destructured values */}
                {touched.password && errors.password && (
                    <FontAwesomeIcon icon={faTriangleExclamation} className='field-icon error-icon' />
                )}
                {touched.password && !errors.password && formData.password && (
                    <FontAwesomeIcon icon={faCheck} className='field-icon success-icon' />
                )}
            </div>
            
            {/* Password strength meters go here below the input block wrapper */}
            <PasswordStrength password={formData.password} />
        </FormField>
    </div>
  )
}

export default StepTwo