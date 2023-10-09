import React from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import './NotificationPage.scss'
import Header from '../../components/header/header'

const ErrorPage = () => {
  return (
    <>
      <Header/>
      <div className="NotificationPage">
          <h3 className='NotificationPage__heading'>404</h3>
          <p className='NotificationPage__text'>page not found</p>
      </div>
    </>
  )
}

export default ErrorPage