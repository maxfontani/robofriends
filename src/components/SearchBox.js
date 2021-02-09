import React from 'react';
import App from '../containers/App';

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