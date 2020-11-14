import React from "react";
import PropsType from "prop-types";
import "./style.scss";
import { Avatar, Button } from "@material-ui/core";
import userAPI from 'api/userAPI';

NotificationItem.propsType = {
  urlImage: PropsType.string,
  isFriend: PropsType.bool,
};

NotificationItem.defaultProps = {
  urlImage: "",
  isFriend: false,
};

function NotificationItem(props) {
  const {uid, name, urlImage } = props;

  const handleClickAddFriend=()=>{

  }

  const handleClickUnFriend=()=>{

  }

  return (
    <li className="NotificationItem">
        <div className="NotificationItem__Avatar">
          <Avatar alt={name} src={urlImage} />
        </div>
      <div className="NotificationItem__Body">
        <div className="NotificationItem__Name">
          <h4>{name}</h4>
        </div>
        <div className="NotificationItem__Btn">
          <Button
            variant="contained"
            onClick={handleClickAddFriend}
            className="NotificationItem__Btn--add"
            color="primary"
            size="small"
            startIcon={<span className="fas fa-user-plus" />}
          >
            Accept
          </Button>
          <Button
            variant="contained"
            onClick={handleClickUnFriend}
            color="primary"
            className="NotificationItem__Btn--remove"
            size="small"
            startIcon={<span className="fas fa-user-slash" />}
          >
            Remove
          </Button>
      </div>
      </div>
    </li>
  );
}

export default NotificationItem;
