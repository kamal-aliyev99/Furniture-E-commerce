import React from 'react'
import { useSelector } from 'react-redux';
import Card from '../cards/card';
import './products.scss'
import { Link } from 'react-router-dom';

const Products = ({products}) => {
  return (
    <div className="productsList">
        {products && products.length && products.map((product) => {
            return(
                <Link to={`/products/${product.id}`} key={product.id}>
                  <Card product={product} />
                </Link>
            )
        })}
    </div>
  )
}

export default Products