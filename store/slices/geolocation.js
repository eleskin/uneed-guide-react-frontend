import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const _getCurrentPosition = () => new Promise((resolve) => {
	navigator.geolocation.getCurrentPosition((geolocation) => resolve(geolocation));
});

const _getNearestCity = (cities, currentPosition) => {
	let minDistance = 0;
	let minDistanceCity = {};
	
	cities.forEach((city, index) => {
		const lat = city['lat'];
		const lon = city['lon'];
		const distance = Math.sqrt((currentPosition.coords.latitude - lat) ** 2 + (currentPosition.coords.longitude - lon) ** 2);
		
		if (index === 0) {
			minDistance = distance;
			minDistanceCity = city;
		}
		
		if (distance < minDistance) {
			minDistance = distance;
			minDistanceCity = city;
		}
	});
	
	return minDistanceCity;
};

export const getAll = createAsyncThunk(
	'geolocation/all',
	async () => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/location/city/all');
			
			if (response.status === 200) {
				return new Promise((resolve) => {
					_getCurrentPosition().then((result) => {
						resolve(_getNearestCity(response.data, result));
					});
				});
			}
			
			return undefined;
		} catch (error) {
			throw new Error(error);
		}
	},
	{},
);

const initialState = {
	nearestCity: null,
	citiesTranslates: {
		'Moscow': 'Москва',
		'St.Petersburg': 'Санкт-Петербург',
		'Murmansk': 'Мурманск',
	}
};

const slice = createSlice({
	name: 'geolocation',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getAll.fulfilled]: (state, {payload}) => {
			if (payload) {
				state.nearestCity = payload;
			}
		},
	},
});

export default slice.reducer;
