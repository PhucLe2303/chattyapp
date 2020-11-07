import React from "react";
import PropTypes from "prop-types";
import { Avatar } from "@material-ui/core";
import "./style.scss";

MessageItem.propTypes = {
  possition: PropTypes.string,
  urlImage: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
};

MessageItem.defaultProps = {
  possition: "left",
  urlImage: null,
  message:
    "Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.",
  date: "18/12/1999   20:15 PM",
  name: "name sender",
};

function MessageItem(props) {
  const { possition, urlImage, name, message, date } = props;

  const leftMessageItem = (
    <div className="MessageItem__Container">
      <div className="MessageItem__Avatar">
        <Avatar src={urlImage} />
      </div>
      <div className="MessageItem__Content">
        <div className="MessageItem__Detail">
          <div className="MessageItem__Name">
            <p>{name}</p>
          </div>
          <div className="MessageItem__Date">
          <p>{date}</p>
          </div>
        </div>
        <div className="MessageItem__Msg">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );

  const rightMessageItem = (
    <div className="MessageItem__Container--Right">
      <div className="MessageItem__Content--Right">
        <div className="MessageItem__Msg--Right">
          <p>{message}</p>
        </div>
        <div className="MessageItem__Detail--Right">
          <p>{date}</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="MessageItem">
      {possition === "left" ? leftMessageItem : rightMessageItem}
    </div>
  );
}

export default MessageItem;
