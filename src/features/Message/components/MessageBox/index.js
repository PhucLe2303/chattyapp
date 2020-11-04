import React from "react";
import ContactBar from "./components/ContactBar";
import FieldInputChat from "./components/FieldInputChat";
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
            <p>--------------------------dong 1---------------------------------</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>eua. Rhoncus dolor purus non enim praesent elementum facilisis leo</p>
            <p>--------------------------dong cuoi---------------------------------</p>
        </div>
        <div className="MessageBox__Footer">
          <FieldInputChat/>
        </div>
      </div>
  );
}

export default MessageBox;
