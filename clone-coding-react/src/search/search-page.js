
import React from 'react'
import SearchNav from './search-nav';
import SearchFilterTag from './search-filter-tag'
import SearchMain from './search-main';
import Links from '../main/link.js'
import Footer from '../main/footer.js';
const SearchPage = () => {
    return(
        <>
            <SearchNav/>
            <SearchMain/>
            <Links/>
            <Footer/>
        </>
    )
}

export default SearchPage;