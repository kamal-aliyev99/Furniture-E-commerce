import React from 'react'
import './loginBackIcon.scss'
import IconArrow from '../../assets/svg/icon-arrow'
import { Link } from 'react-router-dom'

const LoginBackIcon = ({to, children}) => {
  return (
    <Link to={to} className="login__back">
        <IconArrow/> 
        <span className="login__back--txt">{children}</span>
    </Link>
  )
}

export default LoginBackIcon