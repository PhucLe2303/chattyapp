import React from 'react';
import PropTypes from 'prop-types';
import FriendItem from '../FriendItem';
import './style.scss';

FriendList.propTypes = {
    
};

function FriendList(props) {
    return (
        <ul className="FriendList"> 
            <FriendItem name="dau"/>
            <FriendItem name="Huỳnh Quế Trânn"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="Huỳnh Quế Trân"/>
            <FriendItem name="cuoi"/>
        </ul>
    );
}

export default FriendList;