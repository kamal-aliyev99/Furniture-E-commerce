import React, { useEffect, useState } from 'react'
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import LoadingPage from '../../pages/NotificationPage/loadingPage';
import useFetchData from '../../features/dataFetch/dataFetch';
import FetchErrorPage from '../../pages/NotificationPage/fetchErrorPage';
import { useSelector } from 'react-redux';
import ScrollToTop from './scrollToTop';
import { useLocation, useNavigate } from 'react-router-dom';
import useUserFetch from '../../features/dataFetch/userFetch';

const MainLayout = ({children}) => {
  const { getUserData } = useUserFetch({});
  const navigate = useNavigate();
  const {loading, error} = useSelector((state) => state.productsData);
  const {logined, userData, userWishlist, userCart, userId} = useSelector((state) => state.userData);
  const email = localStorage.getItem("email");
  const password = localStorage.getItem("password");

  const location = useLocation();
  useEffect(() => {
    sessionStorage.setItem("pathName", location.pathname);
    document.body.style.overflow = '';
    document.body.style.marginRight = "0";
  }, [location]);

  useEffect(() => {
    if (email && password && !logined) {
      getUserData(email, password);
    }
  }, []);


  return (
    <>
      <ScrollToTop/>
      <Header/>
      { loading ?
        <LoadingPage/> :
        error ?
        <FetchErrorPage/> :
        <>
          {children}
          <Footer/>
        </>
      }
    </>
  )
}

export default MainLayout





//  ScrollToTop   products and products review ? ? ?