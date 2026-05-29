import React from 'react'
import FormField from './FormField'

const StepOne = ({formData, errors, touched, onChange, onBlur}) => {
  return (
    <div>
        <header className="step-title">
            Tell us about yourself
        </header>

        <p className="step-subtitle">
            Enter your personal information so we can create your profile.
        </p>

        <div className="fullname">
            <FormField label={"First Name"} value={formData.firstName} error={errors.firstName} touched={touched.firstName} >
                <input type="text" value={formData.firstName} onChange={(e) => onChange("firstName", e.target.value)} onBlur={() => onBlur("firstName")} />
            </FormField>

            <FormField label={"Last Name"} value={formData.lastName} error={errors.lastName} touched={touched.lastName} >
                <input type="text" value={formData.lastName} onChange={(e) => onChange("lastName", e.target.value)} onBlur={() => onBlur("lastName")} />
            </FormField>
        </div>
        
        <FormField label={"Phone Number"} value={formData.phone} error={errors.phone} touched={touched.phone} >
            <input type="tel" value={formData.phone} onChange={(e) => onChange("phone", e.target.value)} onBlur={() => onBlur("phone")} />
        </FormField>
    </div>
  )
}

export default StepOne