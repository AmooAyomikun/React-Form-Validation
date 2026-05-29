import React from 'react'
import { validateStep } from './utils/validate'
import StepOne from './components/StepOne'
import StepIndicator from './components/StepIndicator'
import ProgressBar from './components/ProgressBar'
import StepTwo from './components/StepTwo'
import StepThree from './components/StepThree'

const App = () => {
  const [currentStep, setCurrentStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
                                  firstName: "",
                                  lastName: "",
                                  phone: "",
                                  email: "",
                                  username: "",
                                  password: ""
  })
  const [errors, setErrors] = React.useState({})
  const [touched, setTouched] = React.useState({})

  React.useEffect(() => {
    localStorage.setItem("multi-step-form", JSON.stringify(formData))
  }, [formData])

  function handleChange(name, value){
    const updatedFormData = {
      ...formData,
      [name] : value
    }

    setFormData(updatedFormData)

    const result = validateStep(currentStep, updatedFormData)
    setErrors(result)
  }

  function handleBlur(name){
    setTouched((prev) => ({
      ...prev,
      [name]:true
    }))
  }

  function handleNext(){
    const stepErrors = validateStep(currentStep, formData)

    if(Object.keys(stepErrors).length){
      setErrors(stepErrors)

      if(currentStep === 1){
        setTouched({
          firstName: true,
          lastName: true,
          phone: true
        })
      }

      if(currentStep === 2){
        setTouched({
          email: true,
          username: true,
          password: true
        })
      }
      return
    }

    setErrors({})
    setCurrentStep(prev => prev + 1)
  }

  function handleBack(){
    setCurrentStep(prev => prev - 1)
  }

  function handleReset() {
    localStorage.removeItem("multi-step-form")
    
    setFormData({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      username: "",
      password: ""
    })

    setErrors({})
    setTouched({})

    setCurrentStep(1)
  }

  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Create Account</h1>

        <p>
          Join our platform and set up your account in just a few steps.
        </p>
      </div>
      <StepIndicator currentStep={currentStep} />
      <ProgressBar currentStep={currentStep} />

      {currentStep === 1 && (
        <StepOne
          formData={formData}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}

      {currentStep === 2 && (
        <StepTwo
          formData={formData}
          errors={errors}
          touched={touched}
          onChange={handleChange}
          onBlur={handleBlur}
        />
      )}

      {currentStep === 3 && (
        <StepThree formData={formData} />
      )}

      <div className="navigation-buttons">
        {currentStep > 1 && currentStep < 3 && (
          <button onClick={handleBack}>
            Back
          </button>
        )}

        {currentStep < 3 && (
          <button onClick={handleNext}>
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button type="button" className="btn-success-start" onClick={handleReset}>
            Create Another Account
          </button>
        )}
      </div>
    </div>
  )
}

export default App