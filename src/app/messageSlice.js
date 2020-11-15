import { createSlice } from '@reduxjs/toolkit';

const initialState={
   friendRequests:[],
   friendList:[],
   sendFriendRequests:[],
   currentContact:'',
}

const messageSlice = createSlice({
    name:"message",
    initialState:initialState,
    reducers:{
        setfriendRequests:(state,action)=>{
            state.friendRequests=action.payload;
        },
        setfriendList:(state,action)=>{
            state.friendList=action.payload;
        },
        setSendFriendRequest:(state,action)=>{
            state.sendFriendRequests=action.payload;
        },
        setCurrentContact:(state,action)=>{
            state.currentContact=action.payload;
        },
    }

});

const {reducer,actions}=messageSlice;

export const {setfriendRequests,setfriendList, setSendFriendRequest, setCurrentContact}=actions;
export default reducer; 
