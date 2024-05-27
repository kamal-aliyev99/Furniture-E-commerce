import React, { useEffect, useState } from 'react'
import './filters.scss'
import IconCheckbox from '../../assets/svg/icon-checkbox'
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory, selectCollection } from '../../features/filter/filterSlice'
import { useLocation, useNavigate } from 'react-router-dom';

const Filters = ({children, filterItems}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const {categories, collections} = useSelector((state) => state.productsData);
  const filterName = filterItems.length !== 0 && Object.keys(filterItems[0])[1];
  const searchParams = new URLSearchParams(location.search);
  const category = filterItems.length !== 0 && searchParams.get('category') && categories.some(filter => filter.id == searchParams.get('category')) ? searchParams.get('category') : "all" ;
  const collection = filterItems.length !== 0 && searchParams.get('collection') && collections.some(filter => filter.id == searchParams.get('collection')) ? searchParams.get('collection') : "all" ;
  const sort = searchParams.get('sort') && ["popular", "cheapest", "expensive"].includes(searchParams.get('sort')) ? searchParams.get('sort') : "popular" ;

  useEffect(() => {
    dispatch(selectCategory( category ));
    dispatch(selectCollection( collection ));
  }, [category, collection]);

  const FilterItem = ({children, value}) => {
    const handleFilterChange = (filterId) => {
      if (filterName == "categoryName") {
        navigate(`?category=${filterId}&collection=${collection}&sort=${sort}`);
      } else if (filterName == "collectionName") {
        navigate(`?category=${category}&collection=${filterId}&sort=${sort}`);
      } 
    };
    
    return (
      <label className='filter__items'>
        <input 
          type="radio" 
          value={value}
          checked={
            filterName == "categoryName" && category == value || 
            filterName == "collectionName" && collection == value
          }  
          onChange={(e) => handleFilterChange(e.target.value)} 
        />
        <IconCheckbox checked={
          filterName == "categoryName" && category == value || 
          filterName == "collectionName" && collection == value
        }/>
        {children}
      </label>
    )
  }

  return (
    <div className="filter">
        <p className="filter__heading">{children}</p>
        <FilterItem value={"all"}>all</FilterItem>
        { filterItems.length !== 0 &&
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