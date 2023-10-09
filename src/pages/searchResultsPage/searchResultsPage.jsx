import React from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import PathLocations from '../../components/pathLocations/pathLocations'
import PagesHeadingSection from '../../components/PagesHeadingSection/PagesHeadingSection'
import './searchResultsPage.scss'
import { useParams } from 'react-router-dom'
import Products from '../../components/products/products'
import { useSelector } from 'react-redux'

const SearchResultsPage = () => {
  const {search} = useParams();
  const {products} = useSelector((state) => state.productsData);
  const searchResults = products && products.filter((product) => product.name.toLowerCase().includes(search.toLowerCase()));

  return (
    <MainLayout>
      <div className="searchResultsPage container">
        <div className='searchResultsPage'>
          <PathLocations/>

            <PagesHeadingSection heading="search results">
              Your search results for “{search}”.
            </PagesHeadingSection>
            <Products products={searchResults}/>
        </div> 
      </div>
    </MainLayout>
  )
}

export default SearchResultsPage