import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ContactBar from "./components/ContactBar";
import FooterBox from "./components/FooterMessageBox";
import MessageBody from "./components/MessageBody";
import './style.scss';

function MessageBox(props) {

  
  const currentContact = useSelector((state)=>state.message.currentContact);
  


  return (
      <div className="MessageBox">
        <div className="MessageBox__Header">
          <div className="MessageBox__ContacBar">
            <ContactBar isOnline={false}/>
          </div>
        </div>
        <div className="MessageBox__Body" id="scrollbar">
            {currentContact!==''?<MessageBody/>:<div>not things to display</div>}
        </div>
        <div className="MessageBox__Footer">
            {currentContact!==''?<FooterBox/>:null}
        </div>
      </div>
  );
}

export default MessageBox;
