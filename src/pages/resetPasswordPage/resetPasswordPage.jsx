import React from 'react'
import LoginLayout from '../../layouts/loginLayout/loginLayout'
import Button from '../../components/buttons/button'
import Input from '../../components/inputs/input'
import LoginBackIcon from '../../components/loginBackIcon/loginBackIcon'
import './resetPasswordPage.scss'
import { Link } from 'react-router-dom'


const ResetPasswordPage = () => {
  return (
    <LoginLayout>
        <LoginBackIcon to="/login">back</LoginBackIcon>
        <div className="login__main">
            <h3 className="login__heading">reset password</h3>
            <form className='login__form'>
                <div className="login__form--inputs">
                <Input type="email" placeholder="e-mail adress"/>
                </div>
                <Button theme="dark">send</Button>
            </form>

            <div className="login__help">
                <span className='login__help--txt'>Don’t have an account?</span>
                <Link to="/register" className='login__help--link'>Register</Link>
            </div>
            
        </div>
    </LoginLayout>
  )
}

export default ResetPasswordPage