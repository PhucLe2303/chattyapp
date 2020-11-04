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
            <Avatar alt="Remy Sharp">P</Avatar>
            <h2>Chatty</h2>
          </div>
          <div className="LeftSideBar__ShowNav_btn">
            <IconButton onClick={handleClickShowNavButton} className="Btn">
              <span className="fas fa-grip-vertical" />
            </IconButton>
          </div>
        </div>
        <div className="LeftSideBar__Seach">
          <InputBase
            placeholder="Search in Chatty"
            inputProps={{ "aria-label": "search google maps" }}
          />
          <IconButton type="submit" aria-label="search" className="Btn">
            <SearchIcon />
          </IconButton>
        </div>
        <div className="LeftSideBar__Body" id="scrollbar">
          <ul className="LeftSideBar__ListContact">
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Chatty</h1>
            </li>
            <li>
              <Avatar alt="Remy Sharp">P</Avatar>
              <h1>Cuoi</h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LeftSideBar;
