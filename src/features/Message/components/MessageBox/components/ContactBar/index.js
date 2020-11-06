import { Avatar, IconButton, Tooltip } from "@material-ui/core";
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
              <Tooltip title="Call">
                <CallIcon />
              </Tooltip>
            </IconButton>
          </li>
          <li className="ContactBar__VideoCall">
            <IconButton>
              <Tooltip title="Chat video">
                <VideoCallIcon />
              </Tooltip>
            </IconButton>
          </li>
          <li className="ContactBar__Info">
            <IconButton>
              <Tooltip title="More infor">
                <InfoIcon />
              </Tooltip>
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ContactBar;
