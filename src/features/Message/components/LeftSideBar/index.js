import { Avatar, ClickAwayListener, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useRef, useState } from "react";
import ContactList from './components/ContactList';
import SearchList from "./components/SearchList";
import "./style.scss";

function LeftSideBar(props) {

  const [valueSearch,setValueSearch]=useState();
  const [isSearch,setIsSearch]=useState(false);
  const refSearch = useRef();

  useEffect(() => {
    document.addEventListener('click', ClickAwayListener);
    return () => {
      document.removeEventListener('click', ClickAwayListener);
    }
  }, [])

  const handleSearch=(value)=>{
    console.log(value);
  }

  const handleClickSearch=()=>{
    setIsSearch(true);
    document.addEventListener('click', handleClickOutSide, false);
  }

  const handleClickOutSide=(event)=>{
    if(!refSearch.current.contains(event.target)){
      setIsSearch(false);
      document.removeEventListener('click', handleClickOutSide, false);
    }
  }

  const handleClickShowNavButton=()=>{
    props.clickOpenNavBtn(true);
  }

  return (
    <div className="LeftSideBar">
      <div className="LeftSideBar__Content">
        <div className="LeftSideBar__Header">
          <div className="LeftSideBar__Avatar">
            <Avatar></Avatar>
          </div>
          <h2>Chatty</h2>
          <div style={{flex:"1 1 auto"}}></div>
          <div className="LeftSideBar__ShowNav_btn">
            <IconButton onClick={handleClickShowNavButton} className="Btn">
              <span className="fas fa-grip-vertical" />
            </IconButton>
          </div>
        </div>
        <div className="LeftSideBar__SeachContent">
          <InputBase
            onClick={handleClickSearch}
            placeholder="Search in Chatty"
            inputProps={{ "aria-label": "search google maps" }}
            className="LeftSideBar__Input"
            startAdornment={
              <SearchIcon/>}
          >
          </InputBase>
        </div>
        <div className="LeftSideBar__Body" id="scrollbar" ref={refSearch} onClick={handleClickOutSide}>
            {isSearch?<SearchList/>:<ContactList/>}
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
