import React from "react";
import PropTypes from "prop-types";
import "./style.scss";
import AvatarComponents from "features/Message/components/Avatar";

MessageItem.propTypes = {
  pos: PropTypes.string,
  urlImage: PropTypes.string,
  message: PropTypes.string,
  date: PropTypes.string,
  name: PropTypes.string,
};

MessageItem.defaultProps = {
  pos: "left",
  urlImage: null,
  message:
    "Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.Firebase can help you tackle demanding challenges, whether you’re a developer, marketer, or product manager. Our tools work together so that mobile teams can improve app performance while gaining valuable user insights.",
  date: "18/12/1999   20:15 PM",
  name: "name sender",
};

function MessageItem(props) {
  const { pos, urlImage, name, message, date } = props;

  const leftMessageItem = (
    <div className="MessageItem__Container">
      <div className="MessageItem__Avatar">
      <AvatarComponents isOnline={true} urlImage={urlImage}/>
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
    <li className="MessageItem">
      {pos === "left" ? leftMessageItem : rightMessageItem}
    </li>
  );
}

export default MessageItem;
