import React from "react";
import PropsType from "prop-types";
import "./style.scss";
import { Avatar, Button } from "@material-ui/core";
import userAPI from 'api/userAPI';
import {useSelector } from "react-redux";

SearchItem.propsType = {
  urlImage: PropsType.string,
  isFriend: PropsType.bool,
};

SearchItem.defaultProps = {
  urlImage: "",
  isFriend: false,
};

function SearchItem(props) {
  const {uid, name, urlImage, isFriend } = props;
  const id = useSelector((state)=>state.user.currentUser.uid);

  const handleClickAddFriend=()=>{
    userAPI.sendFriendRequest(id,uid).catch((error)=>{
      console.log(error);
    })
  }

  const handleClickUnFriend=()=>{

  }

  return (
    <li className="SearchItem">
      <div className="SearchItem__Info">
        <div className="SearchItem__Avatar">
          <Avatar alt={name} src={urlImage} />
        </div>
        <div className="SearchItem__Name">
          <h4>{name}</h4>
        </div>
      </div>
      <div className="SearchItem__Btn">
        {isFriend===false ? (
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
        ) : (
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
        )}
      </div>
    </li>
  );
}

export default SearchItem;
