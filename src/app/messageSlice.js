import { createSlice } from '@reduxjs/toolkit';

const initialState={
   currentOptionNav:null,
}

const messageSlice = createSlice({
    name:"message",
    initialState:initialState,
    reducers:{
        setOptionNav:(state,action)=>{
            state.currentOptionNav=action.payload;
        },
    }

});

const {reducer,actions}=messageSlice;

export const {setOptionNav}=actions;
export default reducer; 
