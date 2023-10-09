import React, { useState } from 'react'
import './filters.scss'
import IconCheckbox from '../../assets/svg/icon-checkbox'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectCollection } from '../../features/filter/filterSlice'

const Filters = ({children, filterItems, pathFilterName}) => {
  const dispatch = useDispatch();
  const selectedFilter = useSelector((state) => state.filter)

  // const {images, categories, collections, products} = useSelector((state) => state.productsData);

  const filterName = filterItems && Object.keys(filterItems[0])[1];

  // console.log(pathFilterName);




  const FilterItem = ({children, value}) => {

    const handleFilterChange = (filterId) => {
      if (Object.keys(filterItems[0])[1] == "categoryName") {
        dispatch(selectCategory( filterId ));
      } else if (Object.keys(filterItems[0])[1] == "collectionName") {
        dispatch(selectCollection( filterId ));
      } 
    };

    return (
      <label className='filter__items'>
        <input 
          type="radio" 
          value={value}
          checked={
            Object.keys(filterItems[0])[1] == "categoryName" && selectedFilter.selectedCategory == value || 
            Object.keys(filterItems[0])[1] == "collectionName" && selectedFilter.selectedCollection == value
          }  // edit var
          onChange={(e) => handleFilterChange(e.target.value)} 
        />
        <IconCheckbox checked={
          Object.keys(filterItems[0])[1] == "categoryName" && selectedFilter.selectedCategory == value || 
          Object.keys(filterItems[0])[1] == "collectionName" && selectedFilter.selectedCollection == value
        }/>
        {children}
      </label>
    )
  }




  return (
    <div className="filter">
        <p className="filter__heading">{children}</p>
        <FilterItem value={"all"}>all</FilterItem>
        { filterItems &&
          filterItems.map((filter) => {
            return(
              <FilterItem key={filter.id} value={filter.id}>{filter[filterName]}</FilterItem>
            )
          })
        }
    </div>
  )
}

export default Filters