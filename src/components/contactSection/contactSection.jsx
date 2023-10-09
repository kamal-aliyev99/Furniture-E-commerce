import React, { useState } from 'react'
import './contactSection.scss'
import { useSelector } from 'react-redux';
import Input from '../inputs/input';
import Button from '../buttons/button';
import ShowMessage from '../showMessage/showMessage';
import contactImage from "../../assets/images/contact.png"

const ContactSection = () => {
  const [showMessage, setShowMessage] = useState(false);
  const handleContact = (e) => {
    e.preventDefault();
    setShowMessage(true);
  }

  return (
    <>
      <div className="contactSection__items">
        <form className="contactSection__form" onSubmit={handleContact}>
          <Input type="text" name="fullName" placeholder="name, surname" required/>
          <Input type="email" name="email" placeholder="e-mail adress" required/>
          <Input type="text" placeholder="theme" required />                    
          <div className="input">
            <textarea className='div__input' placeholder='your message' required></textarea>   
          </div>                   
          <Button theme="dark">log in</Button>
        </form>
        <div className="contactSection__image">
          <img src={contactImage} alt="Furniture"/>
        </div>
      </div>
      { showMessage &&
        <ShowMessage onClick={() => setShowMessage(false)} heading="thank you!">
          Your message has been received and we will contact you as soon as possible.
        </ShowMessage>
      }
    </>
  )
}

export default ContactSection