import React from 'react';

const SearchBox = ({searchChange}) => {

    return (
        <div className = 'bg-ligh-blue pa2'>
            <input 
            className= 'pa3 ba b--green' 
            type='search' 
            placeholder='Find Robot'
            onChange = {searchChange}
            />
        </div>
    )
}

export default SearchBox
