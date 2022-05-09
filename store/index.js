import {combineReducers, configureStore} from '@reduxjs/toolkit';
import navigationSlice from './slices/navigation';
import geolocationSlice from './slices/geolocation';
import mainPageSlice from './slices/mainPage';
import indexSlice from './slices/index';
import userSlice from './slices/user';

const rootReducer = combineReducers({
	navigationSlice,
	geolocationSlice,
	indexSlice,
	mainPageSlice,
	userSlice,
});

const store = configureStore({
	reducer: rootReducer,
});

export default store;
