import React from 'react'
import './pagesHeadingSection.scss'

const PagesHeadingSection = ({children, heading}) => {
  return (
    <>
      <div className="headingSection">
        <h2 className="headingSection__heading">{heading}</h2>
        { children &&
          <p className="headingSection__p">
            {children}
          </p>
        }
      </div>
    </>
  )
}

export default PagesHeadingSection