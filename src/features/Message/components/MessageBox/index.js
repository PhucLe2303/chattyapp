import React from "react";
import ContactBar from "./components/ContactBar";
import FooterBox from "./components/FooterMessageBox";
import MessageItem from "./components/MessageItem";
import './style.scss';

function MessageBox(props) {
  return (
      <div className="MessageBox">
        <div className="MessageBox__Header">
          <div className="MessageBox__ContacBar">
            <ContactBar />
          </div>
        </div>
        <div className="MessageBox__Body" id="scrollbar">
            <MessageItem name="Huỳnh Quế Trân"/>
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân"/>
            <MessageItem name="Lê Hữu Phúc" possition="right" message="Firebase"/>
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân" possition="right"/>
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân" possition="right"/> 
            <MessageItem name="Huỳnh Quế Trân"/> 
        </div>
        <div className="MessageBox__Footer">
          <FooterBox/>
        </div>
      </div>
  );
}

export default MessageBox;
