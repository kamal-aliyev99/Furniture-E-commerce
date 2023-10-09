import React, { useEffect, useState } from 'react'
import './adminPanel.scss'
import Button from '../../components/buttons/button'
import AddProduct from './adminPanelComponents/addProduct/addProduct'
import DeleteProduct from './adminPanelComponents/deleteProduct/deleteProduct'
import EditCategory from './adminPanelComponents/editCategory&Collection/editCategory'
import EditCollection from './adminPanelComponents/editCategory&Collection/editCollection'
import Input from '../../components/inputs/input'
import LoginBackIcon from '../../components/loginBackIcon/loginBackIcon'
import { Link } from 'react-router-dom'

const AdminPanel = () => {
    const [loginAdmin, setLoginAdmin] = useState(false); 
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const adminLogin = "admin";
    const adminPassword = "admin";
    const handleLoginAdmin = (e) => {
        e.preventDefault();
        if (login == adminLogin && password == adminPassword) {
            setLoginAdmin(true);
        }
        setLogin("");
        setPassword("");
    }

    const [addProductSection, setAddProductSection] = useState(false);
    const [deleteProductSection, setDeleteProductSection] = useState(false);
    const [categorySection, setCategorySection] = useState (false);
    const [collectionSection, setCollectionSection] = useState (false);

    const handleAddProductSection = () => {
        setAddProductSection(!addProductSection);
        setDeleteProductSection(false);
        setCategorySection(false);
        setCollectionSection(false);
    }

    const handleDeleteProductSection = () => {
        setDeleteProductSection(!deleteProductSection);
        setAddProductSection(false);
        setCategorySection(false);
        setCollectionSection(false);
    }

    const handleCategorySection = () => {
        setCategorySection(!categorySection);
        setAddProductSection(false);
        setDeleteProductSection(false);
        setCollectionSection(false);
    }

    const handleCollectionSection = () => {
        setCollectionSection(!collectionSection);
        setAddProductSection(false);
        setDeleteProductSection(false);
        setCategorySection(false);
    }

  return (
       loginAdmin ?
        <div className="adminPanel container">
            <header className='AP__header'>
                <h2 className='AP__header--heading'>Admin Panel</h2>
                <Button onclick={() => setLoginAdmin(false)} theme="light">Log out</Button>
            </header>

            <nav className="AP__navbar">
                <Button theme="dark" onclick={handleAddProductSection}>+ Add product</Button>
                <Button theme="dark" onclick={handleDeleteProductSection}>- Delete product</Button>
                <Button theme="dark" onclick={handleCategorySection}> Add / Delete Category </Button>
                <Button theme="dark" onclick={handleCollectionSection}> Add / Delete Collection </Button>

            </nav>

            <section className="addProductSection">
                { addProductSection && <AddProduct/>}
            </section>

            <section className="deleteProductSection">
                { deleteProductSection && <DeleteProduct/> }
            </section>

            <section className="editCCSection">
                { categorySection && <EditCategory/> }
            </section>

            <section className="editCCSection">
                { collectionSection && <EditCollection/> }
            </section>

        </div>
    :       
        <div className="adminPanel__login--background">
            <div className='adminPanel__login container'>
                <LoginBackIcon to="/">home</LoginBackIcon>
                <h4 className='adminPanel__login--heading'>login admin</h4>
                <form onSubmit={handleLoginAdmin} className="adminPanel__login--form">
                    <Input value={login} onChange={(e) => setLogin(e.target.value)} placeholder="login"/>
                    <Input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password"/>
                    <Button theme="dark">log in</Button>
                    <Link to="/"> <Button type="button" theme="light"> homePage </Button> </Link>
                </form>
            </div>
        </div>
  )
}

export default AdminPanel