import React from 'react'

const ProgressBar = ({currentStep}) => {
    const percentage = (currentStep / 3) * 100
  return (
    <div>
        <div className="row">
            <p>Step {currentStep} of 3</p>
            <p>{percentage} %</p>
        </div>
        <div className="track">
            <div className="fill" style={{ width: `${percentage}%` }}></div>
        </div>
    </div>
  )
}

export default ProgressBar