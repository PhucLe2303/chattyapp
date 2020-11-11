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
  const refSearchInput = useRef();

  const handleSearch=(value)=>{
    console.log(value);
  }

  const handleClickOutSide = (event) => {
    if(refSearchInput.current.contains(event.target)){
      setIsSearch(true);
      document.addEventListener("click", handleClickOutSide, false);
      return;
    }
    if (refSearch.current&&!refSearch.current.contains(event.target)) {
      if (!refSearchInput.current.contains(event.target)) {
        setIsSearch(false);
        document.removeEventListener("click", handleClickOutSide, false);
      }
    }
  };

  const handleClickShowNavButton=()=>{
    props.clickOpenNavBtn(true);
  }

  return (
    <div className="LeftSideBar">
      <div className="LeftSideBar__Content">
        <div className="LeftSideBar__Header">
          <div className="LeftSideBar__Avatar">
            <Avatar/>
          </div>
          <h2>Chatty</h2>
          <div style={{flex:"1 1 auto"}}></div>
          <div className="LeftSideBar__ShowNav_btn">
            <IconButton onClick={handleClickShowNavButton} className="Btn">
              <span className="fas fa-grip-vertical" />
            </IconButton>
          </div>
        </div>
        <div className="LeftSideBar__SeachContent" >
          <div ref={refSearchInput} onClick={handleClickOutSide}>
          <InputBase
            autoComplete='off'
            placeholder="Search in Chatty"
            inputProps={{ "aria-label": "Search in Chatty" }}
            className="LeftSideBar__Input"
            startAdornment={
              <SearchIcon/>}
          />
          </div>
        </div>
        <div className="LeftSideBar__Body" id="scrollbar">
            {isSearch?<div ref={refSearch} onClick={handleClickOutSide}><SearchList/></div>:<ContactList/>}
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
