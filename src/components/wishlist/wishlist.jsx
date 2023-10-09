import React, { useEffect, useState } from 'react'
import IconWish from '../../assets/svg/icon-wish';
import Products from '../products/products';
import Card from '../cards/card';
import { useSelector } from 'react-redux';
import './wishlist.scss'
import useUserFetch from '../../features/dataFetch/userFetch';
import { Link } from 'react-router-dom';

const Wishlist = () => {
  const {products} = useSelector((state) => state.productsData);
  const {userWishlist} = useSelector((state) => state.userData);
  
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
  
  const { addProductToWishlist, removeProductFromWishlist } = useUserFetch({});

    function handleWish(e, productId){
        e.preventDefault();
        if (userWishlist.includes(productId)) {
            removeProductFromWishlist(productId);
        } else {
            addProductToWishlist(productId);
        }
    }


  return (
    <div className="wishlist">
        {   windowWidth > 320 ?
            products && products.filter((product) => userWishlist.includes(product.id)).map((product) => {
                return(
                    <div className="wishlist__card" key={product.id}>
                        <div className="wishlist__card--image">
                            <img src={product.photoUrls[0]} alt={product.name}/>
                        </div>
                        <div className="wishlist__card--text">
                            <Link to={`/products/${product.id}`} className="wishlist__card--name">{product.name}</Link>
                            <span className="wishlist__card--price">{product.price}</span>
                        </div>
                        <div className="wishlist__card--wish">
                            <button onClick={(e) => handleWish(e, product.id)}> <IconWish wished={userWishlist.includes(product.id)}/> </button>
                        </div>
                    </div>
                )
            }) 
            :
            products && products.filter((product) => userWishlist.includes(product.id)).map((product) => {
                return (
                    <Card product={product}/>
                )
            })
        }
    </div>
  )
}

export default Wishlist