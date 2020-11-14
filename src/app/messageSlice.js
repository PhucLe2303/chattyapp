import { createSlice } from '@reduxjs/toolkit';

const initialState={
   friendRequests:[],
}

const messageSlice = createSlice({
    name:"message",
    initialState:initialState,
    reducers:{
        setfriendRequests:(state,action)=>{
            state.friendRequests=action.payload;
        }
    }

});

const {reducer,actions}=messageSlice;

export const {setfriendRequests}=actions;
export default reducer; 
