import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTriangleExclamation } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'

const FormField = (props) => {
  return (
    <div className='field'>
        <label htmlFor="">{props.label}</label>
        <div className='input-wrapper'>
            {props.children}
            {props.touched && props.error && <FontAwesomeIcon icon={faTriangleExclamation} className='field-icon error-icon' />}
            {props.touched && !props.error && props.value && <FontAwesomeIcon icon={faCheck} className='field-icon success-icon' />}
        </div>
        {props.touched && props.error && <p className='error-message'>{props.error}</p>}
        {props.touched && !props.error && props.value && <p className='success-message'>{props.success}</p>}
    </div>
  )
}

export default FormField