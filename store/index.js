import {combineReducers, configureStore} from '@reduxjs/toolkit';
import mainPageSlice from './slices/mainPage';

const rootReducer = combineReducers({
	mainPageSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
