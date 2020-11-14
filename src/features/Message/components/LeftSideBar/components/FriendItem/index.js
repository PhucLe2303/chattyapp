import React from "react";
import PropsType from "prop-types";
import "./style.scss";
import { Avatar, Button } from "@material-ui/core";
import userAPI from 'api/userAPI';

FriendItem.propsType = {
  urlImage: PropsType.string,
  isFriend: PropsType.bool,
};

FriendItem.defaultProps = {
  urlImage: "",
  isFriend: false,
};

function FriendItem(props) {
  const {uid, name, urlImage } = props;


  const handleClickUnFriend=()=>{

  }

  return (
    <li className="FriendItem">
      <div className="FriendItem__Info">
      <div className="FriendItem__Avatar">
          <Avatar alt={name} src={urlImage} />
        </div>
        <div className="FriendItem__Name">
          <h4>{name}</h4>
        </div>
      </div>

        <div className="FriendItem__Btn">
          <Button
            variant="contained"
            onClick={handleClickUnFriend}
            color="primary"
            className="FriendItem__Btn--remove"
            size="small"
            startIcon={<span className="fas fa-user-slash" />}
          >
            UnFriend
          </Button>
      </div>
    </li>
  );
}

export default FriendItem;
