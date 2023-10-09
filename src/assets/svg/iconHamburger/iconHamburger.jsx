import React from 'react'
import './iconHamburger.scss'

const IconHamburger = ({active}) => {
  return (
    <span className={`icon-hamburger ${active ? "active" : ""}`}></span>
  )
}

export default IconHamburger