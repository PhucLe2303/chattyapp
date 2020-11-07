import { Grid } from "@material-ui/core";
import React, { useState } from "react";
// import useMedia from "utils/mediaQuery";
import userAPI from "api/userAPI";
import { removeCurrentUser } from "app/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MainNav from "features/Message/components/MainNav";
import MessageBox from "features/Message/components/MessageBox";
import "./style.scss";
import LeftSideBar from "features/Message/components/LeftSideBar";

const MainPage = () => {
  // const media = useMedia();
  const dispatch = useDispatch();
  const history = useHistory();
  const [openNav,setOpenNav] = useState(false);

  const handleOpenNav=(openNav)=>{
    setOpenNav(openNav);
  }

  const handleClickSignOut = () => {
    userAPI
      .signOut()
      .then(() => {
        dispatch(removeCurrentUser());
        history.push("/signin");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Grid
      container
      wrap="nowrap"
      direction="row"
      className="Main"
      >
        <Grid item sx="true" className="MainNav">
          <MainNav
           isOpen={openNav} 
           isClose={handleOpenNav}
           clickSignOut={handleClickSignOut}
           />
        </Grid>
        <Grid
          item
          sx={4}
          className="Main__LeftSideBar"
        >
          <div className="Main__Container">
            <LeftSideBar clickOpenNavBtn={handleOpenNav}/>
          </div>
        </Grid>
        <Grid
          item
          sx={8}
          className="Main__MessageBox"
        >
          <MessageBox />
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
