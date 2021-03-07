import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';

const store = configureStore({
    reducer: {},
    middleware: (getDefaultMiddleware) => {
        if (process.env.NODE_ENV === 'production') {
            return getDefaultMiddleware();
        }
        return [...getDefaultMiddleware(), logger];
    },
    devTools: process.env.NODE_ENV === 'development',
});

export default store;
