import {combineReducers, configureStore} from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocation';
import mainPageSlice from './slices/mainPage';
import indexSlice from './slices/index';

const rootReducer = combineReducers({
	geolocationSlice,
	indexSlice,
	mainPageSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
