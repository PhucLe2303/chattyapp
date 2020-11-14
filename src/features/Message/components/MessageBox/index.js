import React, { useEffect, useRef } from "react";
import ContactBar from "./components/ContactBar";
import FooterBox from "./components/FooterMessageBox";
import MessageItem from "./components/MessageItem";
import './style.scss';

function MessageBox(props) {

  const ref=useRef();
  
  const handleOnScroll = ()=> {
    ref.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }

  useEffect(()=>{
    handleOnScroll();
  },[]);

  return (
      <div className="MessageBox">
        <div className="MessageBox__Header">
          <div className="MessageBox__ContacBar">
            <ContactBar isOnline={false}/>
          </div>
        </div>
        <div className="MessageBox__Body" id="scrollbar">
            <MessageItem name="Huỳnh Quế Trân"/>
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân"/>
            <MessageItem name="Lê Hữu Phúc" pos="right" message="Firebase"/>
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân" pos="right"/>
            <MessageItem name="Huỳnh Quế Trân"/> 
            <MessageItem name="Huỳnh Quế Trân" pos="right"/> 
            <MessageItem name="Huỳnh Quế Trân"/>
            <div ref={ref}></div>
        </div>
        <div className="MessageBox__Footer">
          <FooterBox/>
        </div>
      </div>
  );
}

export default MessageBox;
