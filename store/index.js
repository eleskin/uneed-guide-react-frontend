import {combineReducers, configureStore} from '@reduxjs/toolkit';
import navigationSlice from './slices/navigation';
import geolocationSlice from './slices/geolocation';

const rootReducer = combineReducers({
	navigationSlice,
	geolocationSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
