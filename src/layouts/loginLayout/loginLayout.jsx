import React, { useEffect } from 'react'
import './loginLayout.scss'
import { useSelector } from 'react-redux';
import loginImage from "../../assets/images/login.png"
import { useNavigate } from 'react-router-dom';
import useUserFetch from '../../features/dataFetch/userFetch';

const LoginLayout = ({children}) => {
  const { getUserData } = useUserFetch({});
  const {logined, userData} = useSelector((state) => state.userData);
  const navigate = useNavigate();
  const lastPathName = sessionStorage.getItem("pathName");
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");
  
  useEffect(() => {
      if (email && password && !logined) {
        getUserData(email, password);
      }
    }, []);

  useEffect(() => {  
    if (logined) { 
        navigate(lastPathName ? lastPathName : "/");
        sessionStorage.removeItem("pathName");
    }
  }, [logined]);

  return (
    <div className='page-login'>
        <div className='login__txt'>
          {children}
        </div>
        <div className='login__background'>
            <img src={loginImage} alt="Furniture"/>
        </div>
    </div>
  )
}

export default LoginLayout