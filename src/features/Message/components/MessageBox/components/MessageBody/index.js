import React, { useEffect, useRef } from 'react';
import MessageItem from '../MessageItem';
import './style.scss';

function MessageBody(props) {
    const ref=useRef();

    const handleScroll=()=>{
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
    }

    useEffect(()=>{
        handleScroll();
    },[])
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