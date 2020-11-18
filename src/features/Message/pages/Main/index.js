import { Grid } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import userAPI from "api/userAPI";
import messageAPI from "api/messageAPI";
import { removeCurrentUser } from "app/userSlice";
import {
  setfriendRequests,
  setfriendList,
  setSendFriendRequest,
  setGroupChat,
  setLastMessageByGroupChat,
} from "app/messageSlice";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MainNav from "features/Message/components/MainNav";
import MessageBox from "features/Message/components/MessageBox";
import "./style.scss";
import LeftSideBar from "features/Message/components/LeftSideBar";

const MainPage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [openNav, setOpenNav] = useState(false);
  const uid = useSelector((state) => state.user.currentUser.uid);
  const [numberOfFriendRequests, setNumberOfFriendRequests] = useState(0);
  const [navOption, setnavOption] = useState(0);

  useEffect(() => {
    userAPI.receiveFriendRequestListener(uid, (snapshot) => {
      if (!snapshot.val()) {
        setNumberOfFriendRequests(0);
        dispatch(setfriendRequests([]));
        return;
      }
      dispatch(setfriendRequests(Object.keys(snapshot.val())));
      setNumberOfFriendRequests(Object.keys(snapshot.val()).length);
    });

    userAPI.friendListListener(uid, (snapshot) => {
      if (!snapshot.val()) {
        dispatch(setfriendList([]));
        return;
      }
      dispatch(setfriendList(Object.keys(snapshot.val())));
    });

    userAPI.sendFriendRequestListener(uid, (snapshot) => {
      if (!snapshot.val()) {
        dispatch(setSendFriendRequest([]));
        return;
      }
      dispatch(setSendFriendRequest(Object.keys(snapshot.val())));
    });

    messageAPI.groupChatListener(uid, (snapshot) => {
      if (!snapshot.val()) {
        dispatch(setGroupChat([]));
        return;
      }
      dispatch(setGroupChat(Object.keys(snapshot.val())));
    });

    messageAPI.receiveLastMessageListener(uid,(snapShot)=>{
      if(!snapShot.val()){
        setLastMessageByGroupChat([]);
        return;
      }
      const data = snapShot.val();
      const dataKey = Object.keys(snapShot.val());
      const list = [];
      dataKey.forEach(async(groupID, index) => {
          const senderID = data[groupID].sender;
          const dataChild = data[groupID];
          if (senderID !== uid) {
            const info = await userAPI.getUserInfor(senderID);
            list.push({
              groupID: groupID,
              lastMessage: dataChild.lastMessage,
              contactName: info.firstName + " " + info.lastName,
              senderID: senderID,
              picture: info.picture,
              timestamp: dataChild.timestamp,
            });
          } else {
            const idArr = groupID.split("-", 2);
            const contactID = idArr[0] !== uid ? idArr[0] : idArr[1];
            const info = await userAPI.getUserInfor(contactID);
            list.push({
              groupID: groupID,
              lastMessage: dataChild.lastMessage,
              contactName: info.firstName + " " + info.lastName,
              senderID: senderID,
              picture: info.picture,
              timestamp: dataChild.timestamp,
            });
          }
          if (index === dataKey.length - 1) {
            dispatch(setLastMessageByGroupChat(list));
          }
      });
    });

  }, []);


  const handleOpenNav = (openNav) => {
    setOpenNav(openNav);
  };

  const handlechooseNavOption = (value) => {
    setnavOption(value);
  };

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
      <Grid container wrap="nowrap" direction="row" className="Main">
        <Grid item sx="true" className="MainNav">
          <MainNav
            isOpen={openNav}
            isClose={handleOpenNav}
            clickSignOut={handleClickSignOut}
            numberOfFriendRequests={numberOfFriendRequests}
            chooseOption={handlechooseNavOption}
          />
        </Grid>
        <Grid item xs={false} className="Main__LeftSideBar">
          <div className="Main__Container">
            <LeftSideBar
              clickOpenNavBtn={handleOpenNav}
              numberOfFriendRequests={numberOfFriendRequests}
              navOption={navOption}
            />
          </div>
        </Grid>
        <Grid item xs={false} className="Main__MessageBox">
          <MessageBox />
        </Grid>
      </Grid>
    </>
  );
};

export default MainPage;
