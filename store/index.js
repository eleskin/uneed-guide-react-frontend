import {combineReducers, configureStore} from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocation';

const rootReducer = combineReducers({
	geolocationSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
