import React, { useEffect, useState } from 'react'
import './card.scss'
import IconWish from '../../assets/svg/icon-wish'
import { useSelector } from 'react-redux';
import useUserFetch from '../../features/dataFetch/userFetch';
import { useNavigate } from 'react-router-dom';

const Card = ({product}) => {
  const navigate = useNavigate();
  const { addProductToWishlist, removeProductFromWishlist } = useUserFetch({});
  const {logined, userData, userWishlist, userCart} = useSelector((state) => state.userData);
  const [wish, setWish] = useState(userWishlist.includes(product.id));
  useEffect(() => {
    setWish(userWishlist.includes(product.id));
  },[userWishlist])

    function handleWish(e){
      e.preventDefault();
      if (logined) {
        if (!wish) {
          addProductToWishlist(product.id);
          
        } else {
          removeProductFromWishlist(product.id);
        }
      } else {
          navigate("/login");
      }
  }

  return (
    <div className='card'>
        <div className="card__image">
            <img src={product.photoUrls && product.photoUrls.length != 0 && product.photoUrls[0]} alt={product.name}/>
        </div>
        <p className='card__txt'>{product.name}</p>
        <span className='card__price'>{product.price}$</span>
        <button className="card__wish" onClick={handleWish}><IconWish wished={wish}/></button>
    </div>
  )
}

export default Card