import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import NotificationItem from '../NotificationItem';
import './style.scss';
import { useSelector } from 'react-redux';
import userAPI from 'api/userAPI';
import Loading from 'components/Loading';

NotificationList.propTypes = {
    
};

function NotificationList(props) {

    const listFriendRequest = useSelector((state)=>state.message.friendRequests);
    const [listInfo,setListInfo]=useState([]);
    const [loading,setLoading]=useState(false);

    useEffect(()=>{
        let listUser=[];
        if(listFriendRequest.length===0){
            setListInfo([]);
        }
        listFriendRequest.map((uid,index)=>{
            userAPI.getUserInfor(uid).then((value)=>{
                listUser.push({
                    uid:uid,
                    name:value.firstName+" "+value.lastName,
                    picture:value.picture,
                });
                if(index===listFriendRequest.length-1){
                    setListInfo(listUser);
                }
            }).catch((error)=>console.log(error));
        });
    },[listFriendRequest])

    return (
        <ul className="NotificationList">
            {listInfo.map((user)=>{
                return <NotificationItem key={user.uid} uid={user.uid} name={user.name} picture={user.picture}/>
            })}
        </ul>
    );
}

export default NotificationList;