import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const StepThree = ({formData}) => {
  return (
    <div className="success-screen">

    <div className="success-icon">
        <FontAwesomeIcon icon={faCheck} />
    </div>

    <h1 className="success-title">
        Account successfully created
    </h1>

    <p className="success-subtitle">
        Welcome aboard, {formData.firstName}. Your registration has been completed successfully.
    </p>

    <div className="summary-card">
        <h2>Account Summary</h2>

        <div className="summary-row">
        <span>Full Name</span>
        <strong>
            {formData.firstName} {formData.lastName}
        </strong>
        </div>

        <div className="summary-row">
        <span>Email</span>
        <strong>{formData.email}</strong>
        </div>

        <div className="summary-row">
        <span>Username</span>
        <strong>{formData.username}</strong>
        </div>
    </div>

    </div>
  )
}

export default StepThree