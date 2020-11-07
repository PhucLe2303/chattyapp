import { Avatar } from '@material-ui/core';
import React from 'react';
import './style.scss';
import PropTypes from 'prop-types';

ContactItem.propTypes={
    name:PropTypes.string,
    urlImage:PropTypes.string,
    sender:PropTypes.string,
    message:PropTypes.string,
    date:PropTypes.string,
};

ContactItem.defaultProps={
    name:'name',
    urlImage:null,
    sender:"sender",
    message:"message",
    date:"06/11/2020"
}

function ContactItem(props) {

    const {name,urlImage,sender,message,date}=props;

    return (
        <li className="ContactItem">
            <div className="ContactItem__Avatar">
                <Avatar alt={name} src={urlImage}/>
            </div>
            <div className="ContactItem__Detail">
                <h4>{name}</h4>
                <h6>{sender}:{" "}{message}</h6>
            </div>
            <div className="ContactItem__DateStatus">
                <h6>{date}</h6>
            </div>
        </li>
    );
}

export default ContactItem;