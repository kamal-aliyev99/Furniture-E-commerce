import React from 'react'
import './icons.scss'

const IconArrow = ({ onClick , disabled}) => {
  return (
    <button className='icon__arrow' onClick={onClick} disabled={disabled}>
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
        <path d="M12.8408 4L4.84082 12L12.8408 20L14.2658 18.6L8.66582 13H20.8408V11H8.66582L14.2658 5.4L12.8408 4Z" fill="#EEF0F2"/>
      </svg>
    </button>
  )
}

export default IconArrow