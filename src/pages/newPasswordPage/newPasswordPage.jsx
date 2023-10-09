import React from 'react'
import LoginLayout from '../../layouts/loginLayout/loginLayout'
import LoginBackIcon from '../../components/loginBackIcon/loginBackIcon'
import Button from '../../components/buttons/button'
import Input from '../../components/inputs/input'
import './newPasswordPage.scss'


const NewPasswordPage = () => {
  return (
    <LoginLayout>
        <LoginBackIcon>back</LoginBackIcon>

        <div className="login__main">
            <h3 className="login__heading">new password</h3>

            <form className='login__form'>
                <div className="login__form--inputs">
                <Input type="password" placeholder="enter new password"/>
                <Input type="password" placeholder="confirm password" />                    
                </div>
                <Button theme="dark">submit</Button>
            </form>

           
            
        </div>
    </LoginLayout>
  )
}

export default NewPasswordPage