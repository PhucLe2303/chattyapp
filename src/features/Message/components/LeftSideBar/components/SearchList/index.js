import React from 'react';
import SearchItem from '../SearchItem';
import './style.scss';

function SearchList(props) {

    return (
        <ul className="SearchList">
            <SearchItem name="le huu phuccccccccccccccccccccccccccccccccccc" isFriend={false}/>
            <SearchItem name="sdasdc" isFriend={true}/>
            <SearchItem name="le huu phuc" isFriend={false}/>
            <SearchItem name="basidbnkas" isFriend={true}/>
            <SearchItem name="le huu phuc" isFriend={false}/>
            <SearchItem name="le huu phuc" isFriend={true}/>
            <SearchItem name="basidbnkas" isFriend={true}/>
            <SearchItem name="basidbnkas" isFriend={true}/>
            <SearchItem name="basidbnkas" isFriend={true}/>
            <SearchItem name="basidbnkas" isFriend={true}/>
            <SearchItem name="basidbnkas" isFriend={true}/>
        </ul>
    );
}

export default SearchList;