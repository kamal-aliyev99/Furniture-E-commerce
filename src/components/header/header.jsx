import React, { useEffect, useState } from 'react'
import Language from '../language/language';
import IconSearch from '../../assets/svg/icon-search';
import SiteIcon from '../siteIcon/siteIcon';
import IconBasket from '../../assets/svg/icon-basket';
import IconUser from '../../assets/svg/icon-user';
import IconHamburger from '../../assets/svg/iconHamburger/iconHamburger';
import './header.scss'
import Navbar from '../navbar/navbar';
import Search from '../search/search';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const location = useLocation();
    const [navbarMenu, setNavbarMenu] = useState(false);
    const [searchInput, setSearchInput] = useState(false);
    const {userCart} = useSelector((state) => state.userData);
    useEffect(() => {
      setSearchInput(false);
    },[location])

  return (
    <div className="header__backg">
      <header className={`header container ${navbarMenu ? "activeMenu" : ""}`}>
        <a className='header__lang'><Language/></a>
        <button className='header__search' onClick={() => setSearchInput(!searchInput)}><IconSearch/></button>    
        <SiteIcon className="header__icon"/>
        <Link to="/shoppingCart" className='header__basket'> <IconBasket/>
          { userCart.length > 0 &&
            <span className="header__basket--count"> {userCart.length} </span>
          }
        </Link>
        <Link to="/myAccount" className='header__user'> <IconUser/> </Link>

        <button className='navbar__hamburger' onClick={() => setNavbarMenu(!navbarMenu)}><IconHamburger active={navbarMenu}/></button>
        <Navbar/>
      </header>
      { searchInput &&  
        <Search onClick={() => setSearchInput(!searchInput)}/>
      }
    </div>
  )
}

export default Header