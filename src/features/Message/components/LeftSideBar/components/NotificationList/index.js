import React from 'react';
import PropTypes from 'prop-types';
import NotificationItem from '../NotificationItem';
import './style.scss';

NotificationList.propTypes = {
    
};

function NotificationList(props) {
    return (
        <ul className="NotificationList">
            <NotificationItem name="dau"/>
            <NotificationItem name="le huu phucccccccccccccccccc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="le huu phuc"/>
            <NotificationItem name="cuoi"/>
        </ul>
    );
}

export default NotificationList;