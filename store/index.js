import {combineReducers, configureStore} from '@reduxjs/toolkit';
import geolocationSlice from './slices/geolocation';
import navigationSlice from './slices/navigation';
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
