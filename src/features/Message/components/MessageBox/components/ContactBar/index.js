import { Avatar, IconButton } from "@material-ui/core";
import CallIcon from "@material-ui/icons/Call";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import InfoIcon from "@material-ui/icons/Info";
import React from "react";
import "./style.scss";

function ContactBar(props) {
  return (
    <div className="ContactBar">
      <div className="ListBar">
        <div className="ContactBar__Avatar">
          <Avatar></Avatar>
        </div>
        <ul className="ContactBar__Menu">
          <li className="ContactBar__Call">
            <IconButton>
              <CallIcon />
            </IconButton>
          </li>
          <li className="ContactBar__VideoCall">
            <IconButton>
              <VideoCallIcon />
            </IconButton>
          </li>
          <li className="ContactBar__Info">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactBar;
