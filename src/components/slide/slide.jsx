import React, { useRef, useState } from 'react'
import './slide.scss';
import IconArrow from '../../assets/svg/icon-arrow';
import { useSelector } from 'react-redux';
import Card from '../cards/card';

const Slide = ({children}) => {
    const parentRef = useRef(null);    
    const [ continueScroll, setContinueScroll ] = useState(true);
    const itemsCount = React.Children.count(children);
    if(parentRef.current) {
      var scrollWidth = (parentRef.current.scrollWidth + 20)/ itemsCount;
    }

    const handleMouseWheel = (e) => {
      const delta = e.deltaY || e.detail || e.wheelDelta;
  
      if (parentRef.current && delta && continueScroll) {
        parentRef.current.scrollLeft = delta > 0 ? 
          Math.ceil((parentRef.current.scrollLeft + 1 ) /scrollWidth) * scrollWidth
          : Math.floor((parentRef.current.scrollLeft - 1 ) /scrollWidth) * scrollWidth;
        setContinueScroll(false);
        setTimeout(() => {setContinueScroll(true)}, 200)
      }
    };

    const handleSlideNext = () => {
      parentRef.current.scrollLeft = Math.ceil((parentRef.current.scrollLeft + 1 ) /scrollWidth) * scrollWidth;
    }
    const handleSlidePrew = () => {
      parentRef.current.scrollLeft = Math.floor((parentRef.current.scrollLeft - 1 ) /scrollWidth) * scrollWidth;
    }

    const handleMouseEnter = () => {
      document.body.style.overflow = 'hidden';
      document.body.style.marginRight = "1.3rem";
    };
    
    const handleMouseLeave = () => {
      document.body.style.overflow = '';
      document.body.style.marginRight = "0";
    };


  return (
    <div className='slide'>
      <div className="slideParent" ref={parentRef} onWheel={handleMouseWheel} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        {children}
      </div>

      <div className="slideMoveArrows">
        <div className="slidePrewArrow"><IconArrow onClick={handleSlidePrew}/></div>
        <div className="slideNextArrow"><IconArrow onClick={handleSlideNext}/></div>
      </div>
    </div>
  )
}

export default Slide
