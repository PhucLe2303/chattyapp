import { Button } from "@material-ui/core";
import React from "react";
import useMedia from "utils/mediaQuery";
import userAPI from "api/userAPI";
import { removeCurrentUser } from "app/userSlice";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const MainPage = () => {
  const media = useMedia();
  const dispatch = useDispatch();
  const history = useHistory();
  if (media.isDesktop) console.log("desktop");
  else if (media.isMobile) console.log("mobile");
  else if (media.isTablet) console.log("taplet");
  else console.log("unknow");
  const handleClickSignOut = () => {
    userAPI
      .signOut()
      .then(() => {
        dispatch(removeCurrentUser());
        history.push('/signin');
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <p>xin chao mung den voi chatty</p>
      <Button color="primary" onClick={handleClickSignOut}>
        Sign Out
      </Button>
    </div>
  );
};

export default MainPage;
