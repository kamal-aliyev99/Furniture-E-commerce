import React from 'react'
import MainLayout from '../../layouts/mainLayout/mainLayout'
import PathLocations from '../../components/pathLocations/pathLocations'
import CardFolder from '../../components/cardFolder/cardFolder'
import { useDispatch, useSelector } from 'react-redux'
import './collectionsPage.scss'
import PagesHeadingSection from '../../components/PagesHeadingSection/PagesHeadingSection'
import { selectCollection } from '../../features/filter/filterSlice'
import { Link } from 'react-router-dom'


const CollectionsPage = () => {
  const collections = useSelector((state) => state.productsData.collections);

  const dispatch = useDispatch();
  const handleSetCollection = (collectionId) => {
    dispatch(selectCollection( collectionId ));
  }

  return (
    <MainLayout>
      <div className='collectionsPage container'>
          <PathLocations/>

          <PagesHeadingSection heading="collection">
            Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime.
          </PagesHeadingSection>

          <div className="collectionsSection">
            { collections &&
              collections.map((item) => {
                return (
                  <Link to={`/collections/${item.collectionName}`} onClick={() => handleSetCollection(item.id)} key={item.id}> <CardFolder photo={item.photo}>{item.collectionName}</CardFolder> </Link>
                )
              })
            }
          </div>
      </div>  
    </MainLayout>
  )
}

export default CollectionsPage