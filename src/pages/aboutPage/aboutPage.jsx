import React from 'react'
import './aboutPage.scss'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import AboutSection from '../../components/aboutSection/aboutSection'
import PathLocations from '../../components/pathLocations/pathLocations'
import PagesHeadingSection from '../../components/PagesHeadingSection/PagesHeadingSection'

const AboutPage = () => {
  return (
    <MainLayout>
      <div className='aboutPage container'>
          <PathLocations/>
          <PagesHeadingSection heading="about us"/>
          <AboutSection/>
          <div className="statistics">
            <div className="statistics__items">
              <h2 className="statistics__count">500+</h2>
              <p className="statistics__name">projects</p>
            </div>
            <div className="statistics__items">
              <h2 className="statistics__count">70+</h2>
              <p className="statistics__name">partners</p>
            </div>
            <div className="statistics__items">
              <h2 className="statistics__count">30k+</h2>
              <p className="statistics__name">followers</p>
            </div>
            <div className="statistics__items">
              <h2 className="statistics__count">25+</h2>
              <p className="statistics__name">years</p>
            </div>
          </div>
      </div>
    </MainLayout>
  )
}

export default AboutPage