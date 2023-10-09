import React, { useState } from 'react'
import IconSearch from '../../assets/svg/icon-search'
import { useNavigate } from 'react-router-dom';
import './search.scss'

const Search = ({onClick}) => {
    const navigate = useNavigate();
    const [search, setSearch] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        search && navigate(`/searchresults/${search}`);
    }

  return (
    <div className="searchInputBackground">
        <form className="searchInput" onSubmit={handleSearch}>
        <button><IconSearch/></button>
        <input name='search' placeholder='search our store' onChange={(e) => setSearch(e.target.value)}/>
        <button onClick={onClick} type='button'> &#10006; </button>
        </form>  
    </div>
  )
}

export default Search