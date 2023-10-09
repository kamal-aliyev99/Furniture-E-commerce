import { useEffect, useState } from 'react'
import LoginPage from './pages/loginPage/loginPage'
import ResetPasswordPage from './pages/resetPasswordPage/resetPasswordPage'
import VerificationPage from './pages/verificationPage/verificationPage'
import NewPasswordPage from './pages/newPasswordPage/newPasswordPage'
import RegisterPage from './pages/registerPage/registerPage'
import { BrowserRouter, Route, Routes, useLocation, useParams } from 'react-router-dom'
import ErrorPage from './pages/NotificationPage/errorPage'
import HomePage from './pages/homePage/homePage'
import './App.scss'
import { useDispatch, useSelector } from 'react-redux'
import { setProductsData } from './features/products/productsSlice'
import AboutPage from './pages/aboutPage/aboutPage'
import ContactPage from './pages/contactPage/contactPage'
import CollectionsPage from './pages/collectionsPage/collectionsPage'
import SearchResultsPage from './pages/searchResultsPage/searchResultsPage'
import ProductsPage from './pages/productsPage/productsPage'
import AdminPanel from './pages/adminPanel/adminPanel'
import useDataFetch from './features/dataFetch/dataFetch'
import ProductReviewPage from './pages/productReviewPage/productReviewPage'
import AccountPage from './pages/accountPage/accountPage'
import ShoppingCartPage from './pages/shoppingCartPage/shoppingCartPage'


function App() {
  const { productsData, loading, getProducts, getProductsError } = useDataFetch({});

  useEffect(() => {
    getProducts();
  }, []);


  

  return (
    <>

      <BrowserRouter>
       <Routes>
        <Route path='/login' Component={LoginPage} />
        <Route path='/register' Component={RegisterPage}/>
        <Route path='/new-password' Component={NewPasswordPage}/>
        <Route path='/reset-password' Component={ResetPasswordPage}/>
        <Route path='/verification' Component={VerificationPage}/>

        <Route path='*' Component={ErrorPage}/>
        <Route path='/' Component={HomePage}/>
        <Route path='/about' Component={AboutPage}/>
        <Route path='/contact' Component={ContactPage}/>
        <Route path='/collections' Component={CollectionsPage}/>
        <Route path='/searchResults/:search' Component={SearchResultsPage}/>
        <Route path='/products' Component={ProductsPage}/>
        <Route path='/categories/:categoryName' Component={ProductsPage}/>
        <Route path='/collections/:collectionName' Component={ProductsPage}/>
        <Route path='/products/:productId' Component={ProductReviewPage}/>
        <Route path='/myAccount' Component={AccountPage}/>
        <Route path='/shoppingCart' Component={ShoppingCartPage}/>
        


        <Route path='/adminPanel' Component={AdminPanel}/>

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

