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
import { useLocation, useParams } from 'react-router-dom'

const ProductsPage = () => {
  const {categories, collections, products} = useSelector((state) => state.productsData);
  const selectedCollection = useSelector((state) => state.filter.selectedCollection);
  const selectedCategory = useSelector((state) => state.filter.selectedCategory);
  const selectedSort = useSelector((state) => state.filter.selectedSort);
  const collectionFilteredProducts = selectedCollection != "all" ? products.filter((product) => product.collection.id == selectedCollection) : products;
  const categoryFilteredProducts = selectedCategory != "all" ? collectionFilteredProducts.filter((product) => product.category.id == selectedCategory) : collectionFilteredProducts;
  const filteredProducts = selectedSort == "popular" ? [...categoryFilteredProducts].sort( (a,b) => b.popularity - a.popularity) :
                          selectedSort == "cheapest" ? [...categoryFilteredProducts].sort( (a,b) => a.price - b.price) :
                          selectedSort == "expensive" ? [...categoryFilteredProducts].sort( (a,b) => b.price - a.price) : 
                          categoryFilteredProducts ;

  return (
    <MainLayout>
      <div className='productsPage container'>
          <PathLocations/>
          <div className="productsPage__headingSection">
            <PagesHeadingSection heading={ selectedCollection != "all" ? collections.filter((collection) => collection.id == selectedCollection)[0].collectionName : "products"}>
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
            </PagesHeadingSection>
            <div className="sortsSection">
              <Sort/>
              <Sort sorts={categories && categories}><IconArrowSmall/> categories</Sort>
              <Sort sorts={collections && collections}><IconArrowSmall/> collections</Sort>
            </div>
          </div>
          
          <main className="mainProducts">
            <aside className="mainProducts__sorts">
              <Filters filterItems={categories && categories}>categories</Filters>
              <Filters filterItems={collections && collections}>collections</Filters>
            </aside>
            {  filteredProducts.length != 0 ?
              <Products products={filteredProducts}/> :
              <h3 className='no-product'>no product</h3>
            }
          </main>
      </div>  
    </MainLayout>
  )
}

export default ProductsPage