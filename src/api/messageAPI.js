import {db} from 'services/firebaseConfig';
import timeAPI from 'api/timeAPI';

const messageAPI = {
    sendMessage:(message,fromID, toID)=>{
        return new Promise(async(resolve,reject)=>{
            const time = await timeAPI.getCurrentUnixTime();
            db.ref('chats/'+fromID+'-'+toID +'/').set({
                lastMessage:message,
                timestamp: time,
                sender:fromID,
            }).catch((error)=>console.log(error));

            // db.ref('members/'+fromID+'-'+toID).set({
            //     [fromID]:true,
            //     [toID]:true,
            // }).catch((error)=>console.log(error));

            db.ref('messages/'+ fromID+'-'+toID + '/' + fromID + '/' + time).set({
                message:message,
                timestamp:time,
            }).catch((error)=>console.log(error));

        })
    }
}

export default messageAPI;