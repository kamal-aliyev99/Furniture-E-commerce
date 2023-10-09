import React, { useEffect, useRef, useState } from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import './homePage.scss'
import Slide from '../../components/slide/slide';
import { useDispatch, useSelector } from 'react-redux';
import { setProductsData } from '../../features/products/productsSlice';
import Button from '../../components/buttons/button';
import IconBag from '../../assets/svg/icon-bag';
import CardFolder from '../../components/cardFolder/cardFolder';
import Card from '../../components/cards/card';
import Products from '../../components/products/products';
import AboutSection from '../../components/aboutSection/aboutSection';
import ContactSection from '../../components/contactSection/contactSection';
import { Link } from 'react-router-dom';
import titleImage from "../../assets/images/title.png"
import useUserFetch from '../../features/dataFetch/userFetch';
import { selectCategory, selectCollection } from '../../features/filter/filterSlice'


const HomePage = () => {
  const {categories, collections, products} = useSelector((state) => state.productsData);

  useEffect(() => {
    if (document.querySelector(".titleSection")) {
      const titleHeading = document.querySelector(".titleSection__heading");
      const titleAdditional = document.querySelector(".titleSection__additional");
      titleAdditional.style.marginTop = titleHeading.offsetHeight + 50 + "px";
      function handleTitleMargin() {
        titleAdditional.style.marginTop = titleHeading.offsetHeight + 50 + "px";
      }
      window.addEventListener('resize', handleTitleMargin);
    }
  })

  const dispatch = useDispatch();
  const handleSetCategory = (categoryId) => {
    dispatch(selectCategory( categoryId ));
  }
  const handleSetCollection = (collectionId) => {
    dispatch(selectCollection( collectionId ));
  }

  return (
    <div className='homePage'>
      <MainLayout>
        <section className="container titleSection">
          <div className="titleSection__text">
            <div className="titleSection__text--items">
              <h1 className="titleSection__heading">THE FURNITURE THAT DEFINES YOU</h1>
              <div className="titleSection__additional">
                <p className="titleSection__p">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum</p>
                <Button theme="dark"><IconBag/> shop now</Button>
              </div>
            </div>
          </div>
          <div className="titleSection__image">
            <img src={titleImage} alt="Furniture"/>
            <div className="titleSection__image--blur"></div>
          </div>
        </section>

        <div className="container">
          <Slide>
            {categories && categories.map((item) => {
              return(
                <Link to={`/categories/${item.categoryName}`} onClick={() => handleSetCategory(item.id)} key={item.id}> <CardFolder photo={item.photo}>{item.categoryName} </CardFolder> </Link>
              )
            })}
          </Slide>
        </div>

        <div className="HomePage__aboutSection container">
          <h3 className="aboutSection__heading">about us</h3> 
          <AboutSection short/>
        </div>

        <section className="discountSection">
          <div className="discountSection__background">
            <div className="discountSection__items container">
              <h2 className="discountSection__heading">20% discount</h2>
              <p className="discountSection__p">
              Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo 
              </p>
              <Button theme="dark"><IconBag/> shop now</Button>
            </div>
          </div>
        </section>

        <section className="productsSection container">
          <h3 className="productsSection__heading">products</h3>
          <div className="productsSection__items">
            <Products products={products && products.slice(-9,-1)}/>
          </div>
          <Link to="/products" className='seeAll'> see all</Link>
        </section>

        <section className="popularSection container">
          <h3 className="productsSection__heading">most popular</h3>
          <Slide>
            {products && products.filter((i) => i.popularity > 7.5).map((product) => {
              return(
                <Link to={`/products/${product.id}`} key={product.id}>
                  <Card product={product}/>
                </Link>
              )
            })}
          </Slide>
        </section>

        <section className="collectionsSection">
          <div className="collectionsSection__background container">
            <h3 className="collectionsSection__heading">collections</h3>
              <Slide>
              {collections && collections.map((item) => {
                return(
                  <Link to={`/collections/${item.collectionName}`} onClick={() => handleSetCollection(item.id)} key={item.id}> <CardFolder photo={item.photo}>{item.collectionName}</CardFolder> </Link>
                )
              })}
              </Slide>
            <Link to="/collections" className='seeAll'> see all</Link>
          </div>
        </section>

        <section className="contactSection container">  
          <h3 className="contactSection__heading">contact</h3>              
          <ContactSection/>
        </section>  

      </MainLayout>
    </div>
  )
}

export default HomePage