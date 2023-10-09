import React from 'react'
import SiteIcon from '../siteIcon/siteIcon'
import './footer.scss'

const Footer = () => {
  return (
    <footer className='footer container'>
        <div className='footer__main'>
            <SiteIcon className="footer__icon"/>
        
            <div className='footer__about'>
            <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui </p>
            <a href='tel:+994505555555'>+994 50 555 55 55</a>
            <a href='mailto:youremailhere@gmail.com'>youremailhere@gmail.com</a>
            </div>
        </div>

        <p className='footer__copyright'>©2022 All Right Reserved. Developed by Webcoder Agency</p>
    </footer>
  )
}

export default Footer