import React, { useEffect, useState } from 'react'
import './shoppingCartPage.scss'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import PathLocations from '../../components/pathLocations/pathLocations'
import PagesHeadingSection from '../../components/PagesHeadingSection/PagesHeadingSection'
import Button from '../../components/buttons/button'
import { Link, useNavigate } from 'react-router-dom'
import ProductColor from '../../components/productColor/productColor'
import Pieces from '../../components/pieces/pieces'
import { useSelector } from 'react-redux'
import useUserFetch from '../../features/dataFetch/userFetch'

const ShoppingCartPage = () => {
  const { removeFromCart } = useUserFetch({});
  const navigate = useNavigate();
  const {products} = useSelector((state) => state.productsData);
  const {logined, userCart} = useSelector((state) => state.userData);
  const productsInCart = products.filter(product => userCart.some(cartProduct => cartProduct.productId === product.id));
  const cartProducts = productsInCart.map((product) => {
    const cartProductDetails = userCart.find((cartProduct) => cartProduct.productId === product.id)
    return {...product, ...cartProductDetails};
  })
  const summaryPieces = cartProducts.reduce((summary, product) => summary += product.pieces, 0);
  const summaryPrice = cartProducts.reduce((summary, product) => summary += (product.pieces * product.price), 0);

  useEffect(() => {  
    if (!logined) { 
        navigate("/login");
    }
  }, [logined]);

  const [ productPieces, setProductPieces ] = useState(1);
  const handleIncrease = () => {
    setProductPieces(productPieces+1);
  }
  const handleDecrease = () => {
    if (productPieces >= 2) {
        setProductPieces(productPieces -1);
    }
  }

  const handleRemoveFromCart = (e, productId) => {
    e.preventDefault;
    removeFromCart(productId);
  }

  return (
    <MainLayout>
        <div className="shoppingCartPage container">
            <PathLocations/>
            <PagesHeadingSection heading="shopping cart"/>
            <main className="shoppingCartPage__main">

                <div className="shoppingCartPage__cards">
                    { cartProducts && 
                    cartProducts.map((product) => {
                        return (
                            <div className="shoppingCartPage__card" key={product.id}>
                                <button onClick={(e) => handleRemoveFromCart( e, product.id )} className="product__remove">&#10006;</button>
                                <div className="product__photo">
                                    <img src={product.photoUrls[0]} alt={product.name} />
                                </div>
                                <Link to={`/products/${product.id}`} className="product__name">{product.name}</Link>
                                <ProductColor color={product.color}/>
                                <Pieces disable increase={handleIncrease} decrease={handleDecrease}> {product.pieces} </Pieces>
                                <span className="product__price">{product.price}$</span>
                            </div>
                        )
                    })
                    }
                </div>
                
                <aside className="summary">
                    <h4 className="summary__heading"> summary </h4>
                    <div className="summary__items">
                        <div className="summary__items--text">
                            <p>item count</p>
                            <span>{summaryPieces}</span>
                        </div>
                        <div className="summary__items--text">
                            <p>total price</p>
                            <span>{summaryPrice}$</span>
                        </div>
                        <div className="summary__hr"></div>
                        <Link > <Button theme="dark">checkout</Button> </Link>
                    </div>
                </aside>

            </main>
            <Link to="/products"> back to shopping </Link>
        </div>
    </MainLayout>
  )
}

export default ShoppingCartPage