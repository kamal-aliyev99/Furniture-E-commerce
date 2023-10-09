import React, { useState } from 'react'
import './input.scss'
import IconInputInvalid from '../../assets/svg/icon-input invalid'
import IconEye from '../../assets/svg/icon-eye'


const Input = (props) => {
  const [eyeSwitch, setEyeSwitch] = useState(false);
  const handleEyeSwitch = () => {
    setEyeSwitch(!eyeSwitch);
  };
  
  return (
    <div className={`input ${props.invalid ? "invalid" : ""}`}>
        <input 
          className='div__input'
          type={props.type=="password" ? eyeSwitch ? "text" : "password" : props.type} 
          name={props.name}
          value={props.value}
          minLength={props.minLength}
          maxLength={props.maxLength}
          onChange={props.onChange}
          placeholder={props.placeholder}
          required={props.required}
        />
        {props.type=="password" ? <IconEye eyeSwitch={eyeSwitch} handleEyeSwitch={handleEyeSwitch}/> :null}
        { props.invalid &&
          <>
            <IconInputInvalid/>
            <span className='invalid-text'>{props.invalid ? props.invalid : `Invalid ${props.name}`}</span>
          </>
        }
    </div>
  )
}

export default Input