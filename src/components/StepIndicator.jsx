import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons/faCheck'

const StepIndicator = ({currentStep}) => {
  return (
    <div className='step-container'>
        <div className={1 < currentStep 
                            ? "dot done"
                            : 1 === currentStep
                            ? "dot active"
                            : "dot pending"
        }>{1 < currentStep ? <FontAwesomeIcon icon={faCheck} /> : 1}</div>
        <div className={currentStep >= 2 ? "line done" : "line"} ></div>
        <div className={2 < currentStep 
                            ? "dot done"
                            : 2 === currentStep
                            ? "dot active"
                            : "dot pending"
        }>{2 < currentStep ? <FontAwesomeIcon icon={faCheck} /> : 2}</div>
        <div className={currentStep >= 3 ? "line done" : "line"}></div>
        <div className={3 < currentStep 
                            ? "dot done"
                            : 3 === currentStep
                            ? "dot active"
                            : "dot pending"
        }>{3 < currentStep ? <FontAwesomeIcon icon={faCheck} /> : 3}</div>
    </div>
  )
}

export default StepIndicator