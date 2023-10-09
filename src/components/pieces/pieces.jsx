import React from 'react'
import './pieces.scss'

const Pieces = ({children, increase, decrease, disable}) => {
    

  return (
    <div className="pieces">
        <button onClick={increase} disabled={disable} className="pieces__edit"> + </button>
        <span className="pieces__count"> {children} </span>
        <button onClick={decrease} disabled={disable} className="pieces__edit"> - </button>
    </div>
  )
}

export default Pieces