import { createSlice } from '@reduxjs/toolkit';
import Cookies from 'universal-cookie';


const initialState={
    currentUser:{
        uid:null,
        name:null,
        picture:null,
        token:null,
    },
}

const cookies = new Cookies();

const userSlice = createSlice({
    name:'user',
    initialState:initialState,
    reducers:{
        setCurrentUser:(state,action)=>{
            state.currentUser=action.payload;
            localStorage.setItem('uid',state.currentUser.uid);
            cookies.set('token',state.currentUser.token);
        },
        removeCurrentUser:(state,action)=>{
            state.currentUser=initialState.currentUser;
            localStorage.removeItem('uid');
            cookies.remove('token');
        }
    }
});

const {reducer,actions} = userSlice;
export const {setCurrentUser,removeCurrentUser} = actions;
export default reducer;
