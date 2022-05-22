import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getUpcoming = createAsyncThunk(
	'mainPage/upcoming',
	async (payload) => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour/upcoming', {
				params: payload
			});
			
			if (response.status === 200) {
				return response.data;
			}
			
			return undefined;
		} catch (error) {
			throw new Error(error);
		}
	},
	{},
);

export const getAll = createAsyncThunk(
	'mainPage/all',
	async (payload) => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour/find-all', {
				params: payload
			});
			
			if (response.status === 200) {
				return response.data;
			}
			
			return undefined;
		} catch (error) {
			throw new Error(error);
		}
	},
	{},
);

export const getPopulars = createAsyncThunk(
	'mainPage/populars',
	async (payload) => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour-categories/find-all', {
				params: payload
			});
			
			if (response.status === 200) {
				return response.data;
			}
			
			return undefined;
		} catch (error) {
			throw new Error(error);
		}
	},
	{},
);

export const getSpecials = createAsyncThunk(
	'mainPage/specials',
	async (payload) => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour/find-all', {
				params: payload
			});
			
			if (response.status === 200) {
				return response.data;
			}
			
			return undefined;
		} catch (error) {
			throw new Error(error);
		}
	},
	{},
);

export const getPreferential = createAsyncThunk(
	'mainPage/preferential',
	async (payload) => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour/find-all', {
				params: payload
			});
			
			if (response.status === 200) {
				return response.data;
			}
			
			return undefined;
		} catch (error) {
			throw new Error(error);
		}
	},
	{},
);

const initialState = {
	upcoming: []
};

const slice = createSlice({
	name: 'mainPage',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getUpcoming.fulfilled]: (state, {payload}) => {
			if (payload) {
				state.upcoming = payload;
			}
		},
	},
});

export default slice.reducer;
