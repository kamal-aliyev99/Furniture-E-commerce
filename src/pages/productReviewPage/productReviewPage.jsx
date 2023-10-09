import React, { useEffect, useState } from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import PathLocations from '../../components/pathLocations/pathLocations'
import Slide from '../../components/slide/slide'
import { useSelector } from 'react-redux'
import Card from '../../components/cards/card'
import './productReviewPage.scss'
import Pieces from '../../components/pieces/pieces'
import ProductColor from '../../components/productColor/productColor'
import Button from '../../components/buttons/button'
import useDataFetch from '../../features/dataFetch/dataFetch'
import { Link, useNavigate, useParams } from 'react-router-dom'
import IconBag from '../../assets/svg/icon-bag'
import IconBasket from '../../assets/svg/icon-basket'
import useUserFetch from '../../features/dataFetch/userFetch'

const ProductReviewPage = () => {
    const navigate = useNavigate();
    const { addToCart } = useUserFetch({});
    const {productId} = useParams();
    const {logined, userId} = useSelector((state) => state.userData);
    const {products} = useSelector((state) => state.productsData);
    const product = products && products.filter((product) => product.id == productId)[0]; 
    const productColors = product && product.color.split(" ");
    if (products && !product) { 
        navigate("/*");
    }

    const [bigPhoto, setBigPhoto] = useState(product && product.photoUrls[0]);
    const [selectedColor, setSelectedColor] = useState(productColors && productColors[0]);

    useEffect(() => {
        setBigPhoto(product && product.photoUrls[0]);
        setSelectedColor(productColors && productColors[0])
    }, [product])

    const [ productPieces, setProductPieces ] = useState(1);
    const handleIncrease = () => {
        setProductPieces(productPieces+1);
    }
    const handleDecrease = () => {
        if (productPieces >= 2) {
            setProductPieces(productPieces -1);
        }
    }

    const [ newCart, setNewCart ] = useState({})
    const handleAddToCart = () => {
        if (logined) {
            setNewCart({
                userId: userId,
                productId: productId,
                pieces: productPieces,
                color: selectedColor,
            })
        } else {
            navigate("/login");
        }
    }
    useEffect(() => {
        if (Object.keys(newCart).length !== 0) {
            addToCart(newCart);
          setNewCart({});
        }
      }, [newCart])

  return (
    <MainLayout>
        <div className="container">
            <PathLocations/>
        </div>

        <main className="reviewSection container">
            <h4 className="review__heading--mobileVersion"> {product && product.name} </h4> 
            <div className="review__photos">
                <div className="review__bigPhoto">
                    <img src={bigPhoto && bigPhoto} alt={product && product.name}/> 
                </div>
                <div className="review__otherPhotos">
                    { product && product.photoUrls.map((photo, key) => {
                        return(
                            <img src={photo} onClick={() => setBigPhoto(photo)} alt={product.name} key={key}/>
                        )
                    })
                    }
                </div>
            </div>
            <div className="review__text">
                <h4 className="review__heading"> {product && product.name} </h4>
                <p className="review__p"> {product && product.description} </p>
                <div className="review__color">
                    <p className="review__color--p"> colors </p>
                    <div className="review__color--items">
                        { productColors && productColors.map((color, key) => {
                            return(
                                <ProductColor selected={selectedColor == color} color={color} key={key} onClick={() => setSelectedColor(color)}/>
                            )
                          })
                        }
                    </div>
                </div>
                <Pieces increase={handleIncrease} decrease={handleDecrease}> {productPieces} </Pieces>
                <h3 className="review__price"> {product && product.price}$ </h3>
                <div className="review__btns">
                    <Button onclick={handleAddToCart} theme="dark"> <IconBag /> add to cart </Button>
                </div>
            </div>
        </main>

        <div className="similarProducts container">
            <h3 className="similarProducts__heading">similar products</h3>
            <Slide>
                {   products && products.filter((i) => product && i.category.id == product.category.id).map((product) => { 
                    return(
                        <Link to={`/products/${product.id}`} key={product.id}>
                            <Card product={product}/>
                        </Link>
                    )
                  })
                }
            </Slide>
        </div>
    </MainLayout>
  )
}

export default ProductReviewPage