import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import IconLogout from '../../assets/svg/icon-logout'
import PathLocations from '../../components/pathLocations/pathLocations'
import './accountPage.scss'
import IconUser from '../../assets/svg/icon-user'
import IconWish from '../../assets/svg/icon-wish'
import ProfileChanges from '../../components/profileChanges/profileChanges'
import Wishlist from '../../components/wishlist/wishlist'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {logoutUser} from '../../features/user/userSlice'

const AccountPage = () => {
    const [accountSection, setAccountSection] = useState("personal");
    const {logined, userData} = useSelector((state) => state.userData);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {  
        if (!logined ) { 
            navigate("/login");
        }
    }, [])

    const handleLogout = (e) => {
        e.preventDefault();
        dispatch(logoutUser());
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        navigate("/login");
    }

  return (
    <MainLayout>
        <div className="accountPage container">
            <PathLocations/>
            <main className="accountMain">
                <aside className="accountSection">
                    <h4 className="accountSection__heading"> my account </h4>
                    <div className="accountSection__items">
                        <button onClick={() => setAccountSection("personal")} className={accountSection == "personal" ? 'accountSection__selected' : undefined}>
                            <IconUser selected={accountSection == "personal"}/> personal information
                        </button>
                        <button onClick={() => setAccountSection("wishlist")} className={accountSection == "wishlist" ? 'accountSection__selected' : undefined}>
                            <IconWish black wished={accountSection == "wishlist"}/> wishlist
                        </button>
                        <div className="accountSection__hr"></div>
                        <button onClick={handleLogout}>
                            <IconLogout/> log out
                        </button>
                    </div>
                </aside>
                
                { accountSection == "personal" && <ProfileChanges/>}
                { accountSection == "wishlist" && <Wishlist/>}
            </main>
        </div>
    </MainLayout>
  )
}

export default AccountPage