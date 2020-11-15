import React from "react";
import PropsType from "prop-types";
import "./style.scss";
import { Avatar, Button } from "@material-ui/core";
import userAPI from 'api/userAPI';
import {useSelector } from "react-redux";
import CancelIcon from '@material-ui/icons/Cancel';

SearchItem.propsType = {
  picture: PropsType.string,
  isFriend: PropsType.bool,
  isRequestFriend:PropsType.bool,
};

SearchItem.defaultProps = {
  picture: "",
  isFriend: false,
  isRequestFriend:false,
};

function SearchItem(props) {
  const {uid, name, picture, isFriend, isRequestFriend } = props;
  const id = useSelector((state)=>state.user.currentUser.uid);
  console.log(isRequestFriend);

  const handleClickAddFriend=()=>{
    userAPI.sendFriendRequest(id,uid).catch((error)=>{
      console.log(error);
    })
  }

  const handleClickUnFriend=()=>{
    userAPI.removeFriend(id,uid).then().catch((error)=>{
      console.log(error);
    })
  }

  const handleClickCancel=()=>{
    userAPI.removeRequest(id,uid).then().catch((error)=>{
      console.log(error);
    })
  }

  return (
    <li className="SearchItem">
      <div className="SearchItem__Info">
        <div className="SearchItem__Avatar">
          <Avatar alt={name} src={picture} />
        </div>
        <div className="SearchItem__Name">
          <h4>{name}</h4>
        </div>
      </div>
      <div className="SearchItem__Btn">
        {isFriend===false&&isRequestFriend===false? (
          <Button
            variant="contained"
            onClick={handleClickAddFriend}
            className="SearchItem__Btn--add"
            color="primary"
            size="small"
            startIcon={<span className="fas fa-user-plus" />}
          >
            Add Friend
          </Button>
        ) : isFriend===true?(
          <Button
            variant="contained"
            onClick={handleClickUnFriend}
            color="primary"
            className="SearchItem__Btn--unfr"
            size="small"
            startIcon={<span className="fas fa-users-slash" />}
          >
            UnFriend
          </Button>
        ):<Button
          variant="contained"
          onClick={handleClickCancel}
          color="primary"
          className="SearchItem__Btn--unfr"
          size="small"
          startIcon={<CancelIcon/>}
      >
        Cancel
      </Button>}
      </div>
    </li>
  );
}

export default SearchItem;
