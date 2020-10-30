import { configureStore } from '@reduxjs/toolkit';
import userReducer from 'app/userSlice';
import notificationReducer from 'app/notificationSlice';

const rootReducer={
    user:userReducer,
    notify:notificationReducer,
}

const store = configureStore({
    reducer:rootReducer,
});

export default store;
