import React from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import './contactPage.scss'
import ContactSection from '../../components/contactSection/contactSection'
import PathLocations from '../../components/pathLocations/pathLocations'
import PagesHeadingSection from '../../components/PagesHeadingSection/PagesHeadingSection'

const ContactPage = () => {
  return (
    <MainLayout>
      <div className='contactPage container'>
          <PathLocations/>
          <PagesHeadingSection heading="contact"/>
          <ContactSection/>
      </div>    
    </MainLayout>
  )
}

export default ContactPage