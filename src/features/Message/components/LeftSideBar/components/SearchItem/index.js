import React from "react";
import PropsType from "prop-types";
import "./style.scss";
import { Avatar, Button } from "@material-ui/core";

SearchItem.propsType = {
  urlImage: PropsType.string,
  isFriend: PropsType.bool,
};

SearchItem.defaultProps = {
  urlImage: "",
  isFriend: false,
};

function SearchItem(props) {
  const { name, urlImage, isFriend } = props;

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
        {isFriend ? (
          <Button
            variant="contained"
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
