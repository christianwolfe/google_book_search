import React from 'react';

const SearchBar = () => {
    return ( 
    <div className="searcharea" style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }}>
        <form action="">
         <input className="form-control" type="text" placeholder="Search" aria-label="Search" style={{width: '50em'}} />
         <button className="btn btn-primary" type="submit">Go</button>
        </form>
    </div>
     
    )
}

export default SearchBar;