import React from 'react'

import './SearchBar.css'


// Parameters set in Home.jsx
const SearchBar = ({ value, handleSearchKey, clearSearch, formSubmit }) => ( 
        <div className='searchBar-wrap'>
            <form onSubmit={formSubmit}>
                <input 
                    type='text' 
                    onChange={handleSearchKey} 
                    placeholder='Search By Category or Title'
                    value={value} 
                    />
                {value && <span onClick={clearSearch}>X</span>}
                <button>Go</button>

            </form>
        </div>
);

export default SearchBar;
