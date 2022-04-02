import React from 'react'
import {useOutletContext} from 'react-router-dom'

function SearchBar() {
const [searchTerm, setSearchTerm]=useOutletContext();

function handleChange(e){
    return(
        setSearchTerm(e.target.value)

    )
}
    return (
        <form>
          <label htmlFor='searchBar'>Search</label>
          <input id="searchBar" onChange={handleChange}>

            </input>
        </form>
    )
}

export default SearchBar