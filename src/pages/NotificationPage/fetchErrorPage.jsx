import React from 'react'
import useFetchData from '../../features/dataFetch/dataFetch'
import Header from '../../components/header/header';
import { useSelector } from 'react-redux';

const FetchErrorPage = () => {
    const error = useSelector((state) => state.productsData.error);

  return (
    <>
        <div className="NotificationPage">
            <h3 className='NotificationPage__heading'>Error</h3>
            <p className='NotificationPage__text'>{error}</p>
        </div>
    </>
  )
}

export default FetchErrorPage