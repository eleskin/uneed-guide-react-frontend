import {combineReducers, configureStore} from '@reduxjs/toolkit';
import navigationSlice from './slices/navigation';
import geolocationSlice from './slices/geolocation';
import indexSlice from './slices/index';

const rootReducer = combineReducers({
	navigationSlice,
	geolocationSlice,
	indexSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
