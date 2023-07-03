import { combineReducers } from '@reduxjs/toolkit';
import auth from './auth/slice';

const createRootReducer = () => {
    return combineReducers({
        auth,
    });
};

export default createRootReducer;
