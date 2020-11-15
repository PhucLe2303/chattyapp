import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import userAPI from "api/userAPI";
import { removeCurrentUser } from "app/userSlice";
import {setfriendRequests,setfriendList,setSendFriendRequest} from 'app/messageSlice';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MainNav from "features/Message/components/MainNav";
import MessageBox from "features/Message/components/MessageBox";
import "./style.scss";
import LeftSideBar from "features/Message/components/LeftSideBar";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openNav,setOpenNav] = useState(false);
  const uid = useSelector((state)=>state.user.currentUser.uid);
  const [numberOfFriendRequests,setNumberOfFriendRequests] = useState(0);
  const [navOption,setnavOption] = useState(0);

  useEffect(()=>{
    userAPI.receiveFriendRequestListener(uid,(snapshot)=>{
      if(!snapshot.val()){
        setNumberOfFriendRequests(0);
        dispatch(setfriendRequests([]));
        return;
      }
      dispatch(setfriendRequests(Object.keys(snapshot.val())));
      setNumberOfFriendRequests(Object.keys(snapshot.val()).length);
    });

    userAPI.friendListListener(uid,(snapshot)=>{
      if(!snapshot.val()){
        dispatch(setfriendList([]));
        return;
      }
      dispatch(setfriendList(Object.keys(snapshot.val())));
    });

    userAPI.sendFriendRequestListener(uid,(snapshot)=>{
      if(!snapshot.val()){
        dispatch(setSendFriendRequest([]));
        return;
      }
      dispatch(setSendFriendRequest(Object.keys(snapshot.val())));
    });
  },[]);

  const handleOpenNav=(openNav)=>{
    setOpenNav(openNav);
  }

  const handlechooseNavOption=(value)=>{
    setnavOption(value);
    console.log(value);
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
           numberOfFriendRequests={numberOfFriendRequests}
           chooseOption={handlechooseNavOption}
           />
        </Grid>
        <Grid
          item
          xs={false}
          className="Main__LeftSideBar"
        >
          <div className="Main__Container">
            <LeftSideBar clickOpenNavBtn={handleOpenNav} numberOfFriendRequests={numberOfFriendRequests} navOption={navOption}/>
          </div>
        </Grid>
        <Grid
          item
          xs={false}
          className="Main__MessageBox"
        >
          <MessageBox />
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
