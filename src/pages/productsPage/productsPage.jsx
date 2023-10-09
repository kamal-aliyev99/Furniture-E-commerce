import React, { useState } from 'react'
import './productsPage.scss'
import PagesHeadingSection from '../../components/PagesHeadingSection/PagesHeadingSection'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import PathLocations from '../../components/pathLocations/pathLocations'
import Sort from '../../components/sortChange/sortChange'
import { useDispatch, useSelector } from 'react-redux'
import IconArrowSmall from '../../assets/svg/icon-arrow-small'
import Products from '../../components/products/products'
import Filters from '../../components/filters/filters'
import { useParams } from 'react-router-dom'

const ProductsPage = () => {
  const {categoryName, collectionName} = useParams();
  const {images, categories, collections, products} = useSelector((state) => state.productsData);



  const selectedCollection = useSelector((state) => state.filter.selectedCollection);
  const selectedCategory = useSelector((state) => state.filter.selectedCategory);

  const collectionFilteredProducts = selectedCollection != "all" ? products.filter((product) => product.collection.id == selectedCollection) : products;
  const filteredProducts = selectedCategory != "all" ? collectionFilteredProducts.filter((product) => product.category.id == selectedCategory) : collectionFilteredProducts;


  return (
    <MainLayout>
      <div className='productsPage container'>
          <PathLocations/>
          <div className="productsPage__headingSection">
            <PagesHeadingSection heading={ categoryName ? categoryName :
                                          collectionName ? collectionName :
                                           "products"}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
            </PagesHeadingSection>
            <div className="sortsSection">
              <Sort/>
              <Sort sorts={categories && categories.category}><IconArrowSmall/> categories</Sort>
              <Sort sorts={collections && collections.collection}><IconArrowSmall/> collections</Sort>
            </div>
          </div>
          
          <main className="mainProducts">
            <aside className="mainProducts__sorts">
              <Filters filterItems={categories && categories}>categories</Filters>
              <Filters filterItems={collections && collections}>collections</Filters>
            </aside>
            <Products products={filteredProducts}/>
          </main>
      </div>  
    </MainLayout>
  )
}

export default ProductsPage