import React from 'react'
import './productColor.scss'

const ProductColor = ({onClick, selected, color}) => {
  
  return (
    <div className="productColor__border" style={{border: selected ? `1px solid ${color}` : "none" }}>
      <button className="productColor " onClick={onClick} style={{backgroundColor: color}}> </button>
    </div>
  )
}

export default ProductColor