import React from 'react'
import { Link } from 'react-router-dom'
import './cardFolder.scss'

const CardFolder = ({children, photo}) => {
  return (
    <div className="cardFolder">
        <div className="cardFolder__image"><img src={photo} alt={children}/></div>
        <p className='cardFolder__name'> {children} </p>
    </div>
  )
}

export default CardFolder
