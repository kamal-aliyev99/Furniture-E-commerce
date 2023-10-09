import React, { useEffect, useState } from 'react'
import LoginLayout from '../../layouts/loginLayout/loginLayout'
import LoginBackIcon from '../../components/loginBackIcon/loginBackIcon'
import Button from '../../components/buttons/button'
import Input from '../../components/inputs/input'
import './registerPage.scss'
import { Link } from 'react-router-dom'
import useUserFetch from '../../features/dataFetch/userFetch'


const RegisterPage = () => {
  const { registerUserData } = useUserFetch({});
  const [ newUser, setNewUser ] = useState({});
  const [ fullName, setFullName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ password, setPassword ] = useState("");
  const [ repeatPassword, setRepeatPassword ] = useState("");
  const [ invalidRepeatPassword, setInvalidRepeatPassword] = useState("");
  const handleRegister = (e) => {
    e.preventDefault();
    if (password != repeatPassword) {
      setInvalidRepeatPassword("Repeat password is wrong");
      setTimeout(() => {
        setInvalidRepeatPassword("");
      }, 3000);
    } else {
      setNewUser(
        {
          fullName: fullName,
          email: email,
          password: password,
        }
      );
      setFullName("");
      setEmail("");
      setPassword("");
      setRepeatPassword("");
    }
  }

  useEffect(() => {
    if (Object.keys(newUser).length !== 0) {
      registerUserData(newUser);
      setNewUser({});
    }
  }, [newUser])

  return (
    <LoginLayout>
        <LoginBackIcon to="/">home</LoginBackIcon>
        <div className="login__main">
            <h3 className="login__heading">Register</h3>
            <form className='login__form' onSubmit={handleRegister}>
                <div className="login__form--inputs">
                <Input value={fullName} onChange={(e) => setFullName(e.target.value)} name="fullName" type="text" placeholder="name surname" required/>
                <Input value={email} onChange={(e) => setEmail(e.target.value)} name="email" type="email" placeholder="e-mail adress" required/>
                <Input value={password} onChange={(e) => setPassword(e.target.value)} minLength="8" type="password" placeholder="password" required/>                    
                <Input value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} type="password" placeholder="repeat password" invalid={invalidRepeatPassword} required />                    
                </div>
                <Button theme="dark">log in</Button>
            </form>

            <div className="login__help">
                <span className='login__help--txt'>Already have an account?</span>
                <Link to="/login" className='login__help--link'>Log in</Link>
            </div>
        </div>
    </LoginLayout>
  )
}

export default RegisterPage