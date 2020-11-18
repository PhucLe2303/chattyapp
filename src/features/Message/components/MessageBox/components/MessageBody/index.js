import messageAPI from 'api/messageAPI';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MessageItem from '../MessageItem';
import {setCurrentMessage} from 'app/messageSlice';
import './style.scss';

function MessageBody(props) {
    const ref=useRef();
    const groupID = useSelector((state)=>state.message.currentGroupID);
    const dispatch = useDispatch();
    const message = useSelector((state)=>state.message.currentMessage);

    const handleScroll=()=>{
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }

    useEffect(()=>{
        handleScroll();
        messageAPI.receiveMessageListener(groupID,(snapShot)=>{
            dispatch(setCurrentMessage(snapShot.val()));
          });
    },[groupID]);

    console.log(message);

    return (
        <ul className="MessageBody">
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
        </ul>
    );
}

export default MessageBody;