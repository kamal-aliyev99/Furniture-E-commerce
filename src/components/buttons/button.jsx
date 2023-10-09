import React from 'react'
import "./btn.scss"

const Button = ({children, theme, onclick, type}) => {
  return (
    <button type={type ? type : "submit"} className={`btn ${theme}`} onClick={onclick ? onclick : () => {}}>{children}</button>
  )
}

export default Button