import {combineReducers, configureStore} from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocation';
import indexSlice from './slices/index';

const rootReducer = combineReducers({
	geolocationSlice,
	indexSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
