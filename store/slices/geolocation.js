import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

const _getCurrentPosition = () => new Promise((resolve, reject) => {
	navigator.geolocation.getCurrentPosition((geolocation) => {
		resolve(geolocation);
	}, (error) => reject(error));
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
						const nearestCity = _getNearestCity(response.data, result);
						const otherCities = response.data.filter((city) => city.id !== nearestCity.id);
						resolve([nearestCity, ...otherCities]);
					}).catch(() => {
						resolve(response.data);
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
	selectedCity: null,
	citiesTranslates: {
//		'moscow': 'Москва',
		'st.petersburg': 'Санкт-Петербург',
//		'murmansk': 'Мурманск',
	},
	cities: {},
};

const slice = createSlice({
	name: 'geolocation',
	initialState: initialState,
	reducers: {
		setSelectedCity(state, {payload}) {
			state.selectedCity = Object.values(state.cities)[payload];
		},
	},
	extraReducers: {
		[getAll.fulfilled]: (state, {payload}) => {
			if (payload) {
				state.cities = payload;
				state.nearestCity = payload[0];
				state.selectedCity = payload[0];
			}
		},
	},
});

export const {setSelectedCity} = slice.actions;
export default slice.reducer;
