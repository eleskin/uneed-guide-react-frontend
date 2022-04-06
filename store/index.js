import {combineReducers, configureStore} from '@reduxjs/toolkit';
import navigationSlice from './slices/navigation';

const rootReducer = combineReducers({
	navigationSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
