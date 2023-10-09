import React, { useEffect, useState } from 'react'
import LoginLayout from '../../layouts/loginLayout/loginLayout'
import Input from '../../components/inputs/input'
import Button from '../../components/buttons/button'
import LoginBackIcon from '../../components/loginBackIcon/loginBackIcon'
import './loginPage.scss'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useUserFetch from '../../features/dataFetch/userFetch'

const LoginPage = () => {
  const { getUserData } = useUserFetch({});

  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");

  // const {logined, userData} = useSelector((state) => state.userData);
  
  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      getUserData(email, password);
      setEmail("");
      setPassword("");
    }
  }

  return (
    <LoginLayout>
        <LoginBackIcon to="/">home</LoginBackIcon>

        <div className="login__main">
            <h3 className="login__heading">log in</h3>

            <form className='login__form' onSubmit={handleLogin}>
                <div className="login__form--inputs">
                <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="e-mail adress" required/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} name="password" minLength="8" type="password" placeholder="password" required/>                    
                </div>
                <Link to="/reset-password" className='login__forgot'>Forgot password?</Link>
                <Button theme="dark">log in</Button>
            </form>

            <div className="login__help">
                <span className='login__help--txt'>Don’t have an account?</span>
                <Link to="/register" className='login__help--link'>Register</Link>
            </div>
            
        </div>
    </LoginLayout>
  )
}

export default LoginPage