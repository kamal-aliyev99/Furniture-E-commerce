import React, { useState } from 'react'
import Button from '../buttons/button'
import './sortChange.scss'
import IconSort from '../../assets/svg/icon-sort'




const Sort = ({children, sorts = [ "popular first", "cheapest first", "expensive first"] }) => {

  const sortListHeight = 7.5 + 3.5 * (sorts.length -1);

  const Sorts = ({children,sort}) => {
    return (
      <label className='sort__list--item' onClick={handleSortSwitch}>
        <input 
          type="radio" 
          value="option1"
          // checked={selectedOption === {sort}}  // edit var
          // onChange={handleOptionChange} // edit func
        />
        {children}
      </label>
    )
  }

  const [sortSwitch, setSortSwitch] = useState(true);
  const handleSortSwitch = () => {
    setSortSwitch(!sortSwitch);
  };

  return (
    <div className={`sort ${sortSwitch ? "deactive" : ""}`}>
        <Button theme="light" onclick={handleSortSwitch}> { children ? children : <><IconSort/> sort by</> } </Button> 
        <div className="sort__list" style={{height:`${sortListHeight}rem`}}>
          { sorts.map((item, key) => {
              return (
                <Sorts sort="popular" key={key}>{item}</Sorts> 
              )
            })
          }
        </div>
    </div>
  )
}

export default Sort

