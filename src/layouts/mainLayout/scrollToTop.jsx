import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { resetFilters } from '../../features/filter/filterSlice'

const ScrollToTop = () => {
  const location = useLocation();
  const dispatch = useDispatch();
    useEffect(() => {
      if (!location.pathname.includes("/products")) {
        window.scrollTo(0,0);
        dispatch(resetFilters());
      }
    }, [location]);
}

export default ScrollToTop