import { Avatar, IconButton, InputBase } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";
import "./style.scss";

function LeftSideBar(props) {

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
            placeholder="Search in Chatty"
            inputProps={{ "aria-label": "search google maps" }}
            className="LeftSideBar__Input"
            startAdornment={
              <SearchIcon/>}
          >
          </InputBase>
        </div>
        <div className="LeftSideBar__Body" id="scrollbar">
         
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
