import React from "react";
import ContactItem from "../ContactItem";
import './style.scss';

function ContactList(props) {
  const message = "Lê Hữu Phúc đẹp trai vãi cả đái :V";
  const message2 = "hello";
  
  return(
  <>
    <ul className="ContactList">
      <ContactItem name="le huu phuc" sender="you" message={message} date="20/11/2020" isOnline={true}/>
      <ContactItem name="Huỳnh Quế Trân" sender="Phúc" message={message2} date="23/03/2020"/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
      <ContactItem/>
    </ul>
  </>

);
}
export default ContactList;
