import React from 'react'
import LoginLayout from '../../layouts/loginLayout/loginLayout'
import Input from '../../components/inputs/input'
import Button from '../../components/buttons/button'
import LoginBackIcon from '../../components/loginBackIcon/loginBackIcon'
import './verificationPage.scss'


const VerificationPage = () => {
  return (
    <LoginLayout>
        <LoginBackIcon>back</LoginBackIcon>

        <div className="login__main">
            <h3 className="login__heading">verification</h3>

            <form className='login__form'>
                <div className="login__form--inputs">
                <Input type="email" placeholder="enter verification number"/>
                </div>
                <div className="login__help">
                    <span className='login__help--txt'>Didn’t receive a code?</span>
                    <a className='login__help--link'>Resend</a>
                </div>
                <Button theme="dark">verify</Button>
            </form>

            
            
        </div>
    </LoginLayout>
  )
}

export default VerificationPage



// import React from 'react'
// import LoginLayout from '../../layouts/login-layout/login-layout'
// import './login-page.scss'
// import Input from '../../components/inputs/input'
// import Button from '../../components/buttons/button'
// import LoginBackIcon from '../../components/login-back-icon/login-back-icon'
