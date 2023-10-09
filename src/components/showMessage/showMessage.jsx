import React from 'react'
import './showMessage.scss'
import { Link } from 'react-router-dom'
import Button from '../buttons/button'

const ShowMessage = ({onClick, heading, children}) => {
  return (
    <div className="showMessage_background">
        <div className="container">
            <div className="showMessage">
                <h4>{heading}</h4>
                <p>{children}</p>
                <Link to="/"> <Button onclick={onClick} theme="dark"> home page </Button> </Link>
                <button onClick={onClick}> &#10006; </button>
            </div>
        </div>
    </div>
  )
}

export default ShowMessage