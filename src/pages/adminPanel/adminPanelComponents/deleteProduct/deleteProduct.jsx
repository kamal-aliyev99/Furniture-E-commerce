import React from 'react'
import './deleteProduct.scss'
import Card from '../../../../components/cards/card';
import { useSelector } from 'react-redux';
import Button from '../../../../components/buttons/button';
import useDataFetch from '../../../../features/dataFetch/dataFetch';


const DeleteProduct = () => {
  const {products} = useSelector((state) => state.productsData);

  const { deleteProduct } = useDataFetch({});

  const handleDelete = (productId) => {
    // console.log(productId);
    deleteProduct(productId);
  }


  return (
    <div className="deleteProduct">
      <h4 className="deleteProduct__heading">Delete product</h4>
      <div className="deleteProduct__items">
        { products &&
          products.map((item) => {
            return(
              <div className="deleteProduct__item" key={item.id}>
                <div className="deleteProduct__item--photo">
                  <img src={item.photoUrls} alt={item.name} />
                </div>
                <div className="deleteProduct__item--text">
                  <p className="deleteProduct__item--name">{item.name}</p>
                  <span className="deleteProduct__item--price">{item.price}</span>
                </div>

                <Button onclick={() => handleDelete(item.id)} theme="light"> Delete </Button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default DeleteProduct