import React from "react";
import { Divider, Drawer, IconButton, Tooltip } from "@material-ui/core";
import logo from "assets/images/iconchat.png";
import "./style.scss";

function MainNav(props) {
  const { isOpen, isClose, clickSignOut } = props;

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    isClose(false);
  };

  const handleClickSignOut=()=>{
    clickSignOut();
  };

  const drawer = (
    <div className="Toolbar">
      <div className="Toolbar__Header">
        <IconButton>
          <img
            style={{ width: "45px", height: "45px", borderRadius: "50%" }}
            src={logo}
            alt="logo"
          />
        </IconButton>
      </div>
      <Divider />
      <div className="Toolbar__Content">
        <div className="Toolbar__Body">
          <ul className="Toolbar__ListBody">
            <li>
              <Tooltip title="Messages" placement="right-end">
                <IconButton className="Btn">
                  <span className="fas fa-comment-dots icon" />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Friends" placement="right-end">
                <IconButton className="Btn">
                  <span className="fas fa-user-friends icon" />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Nocification" placement="right-end">
                <IconButton className="Btn">
                  <span className="fas fa-bell icon" />
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </div>
        <div className="Toolbar__Footer">
          <ul className="Toolbar__ListFooter">
            <li>
              <Tooltip title="Setting" placement="right-end">
                <IconButton className="Btn">
                  <span className="fas fa-cog Btn--Setting icon" />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Theme mode" placement="right-end">
                <IconButton className="Btn">
                  <span className="fas fa-moon icon" />
                </IconButton>
              </Tooltip>
            </li>
            <li>
              <Tooltip title="Sign out" placement="right-end">
                <IconButton 
                onClick={handleClickSignOut}
                className="Btn"
                >
                  <span className="fas fa-sign-out-alt icon" />
                </IconButton>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  return (
    <div className="MainNav">
      <Drawer anchor="left" open={isOpen} onClose={toggleDrawer("left", false)}>
        {drawer}
      </Drawer>
    </div>
  );
}

export default MainNav;
