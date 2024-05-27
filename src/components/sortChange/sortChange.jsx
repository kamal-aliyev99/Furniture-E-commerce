import React, { useEffect, useState } from 'react'
import Button from '../buttons/button'
import './sortChange.scss'
import IconSort from '../../assets/svg/icon-sort'
import { useDispatch, useSelector } from 'react-redux'
import { selectCategory, selectCollection, selectSort } from '../../features/filter/filterSlice'
import { useLocation, useNavigate } from 'react-router-dom'


const Sort = ({children, sorts = [{id:"popular", sortName:"popular first"}, {id:"cheapest", sortName:"cheapest first"}, {id:"expensive", sortName:"expensive first"}] }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const sortName = sorts.length !== 0 && Object.keys(sorts[0])[1];
  const sortListHeight = 7.5 + 3.5 * (sorts.length -1) + ( sortName != "sortName" ? 3.5 : 0 );
  const {categories, collections} = useSelector((state) => state.productsData);
  const searchParams = new URLSearchParams(location.search);
  const category = sorts.length !== 0 && searchParams.get('category') && categories.some(filter => filter.id == searchParams.get('category')) ? searchParams.get('category') : "all" ;
  const collection = sorts.length !== 0 && searchParams.get('collection') && collections.some(filter => filter.id == searchParams.get('collection')) ? searchParams.get('collection') : "all" ;
  const sort = searchParams.get('sort') && ["popular", "cheapest", "expensive"].includes(searchParams.get('sort')) ? searchParams.get('sort') : "popular" ;

  const [sortSwitch, setSortSwitch] = useState(true);
  const handleSortSwitch = () => {
    setSortSwitch(!sortSwitch);
  };

  useEffect(() => {
    dispatch(selectCategory( category ));
    dispatch(selectCollection( collection ));
    dispatch(selectSort( sort ));
  }, [category, collection, sort]);

  const Sorts = ({children,value}) => {

    const handleFilterChange = (filterId) => {
      if (sortName == "categoryName") {
        navigate(`?category=${filterId}&collection=${collection}&sort=${sort}`);
      } else if (sortName == "collectionName") {
        navigate(`?category=${category}&collection=${filterId}&sort=${sort}`);
      } else if (sortName == "sortName") {
        navigate(`?category=${category}&collection=${collection}&sort=${filterId}`);
      }
    setSortSwitch(!sortSwitch);
    };
    
    return (
      <label className='sort__list--item'>
        <input 
          type="radio" 
          value={value}
          checked={
            sortName == "categoryName" && category == value || 
            sortName == "collectionName" && collection == value ||
            sortName == "sortName" && sort == value
          }  
          onChange={(e) => handleFilterChange(e.target.value)} 
        />
        {children}
      </label>
    )
  }

  return (
    <div className={`sort ${sortSwitch ? "deactive" : ""}`}>
        <Button theme="light" onclick={handleSortSwitch}> { children ? children : <><IconSort/> sort by</> } </Button> 
        <div className="sort__list" style={{height:`${sortListHeight}rem`}}>
        { sortName != "sortName" &&
          <Sorts value="all"> all </Sorts>
        } 
          { sorts.map((item) => {
              return (
                <Sorts value={item.id} key={item.id}>{item[sortName]}</Sorts> 
              )
            })
          }
        </div>
    </div>
  )
}

export default Sort

