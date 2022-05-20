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
	async () => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour/find-all');
			
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
