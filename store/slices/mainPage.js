import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getUpcoming = createAsyncThunk(
	'mainPage/upcoming',
	async () => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/tour/upcoming');
			
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
//		[getAll.fulfilled]: (state, {payload}) => {
//			if (payload) {
//				payload.forEach((menu) => {
//					if (menu.name === 'Главное меню') {
//						state.mainMenuElements = menu.links.filter((link) => {
//							if (link['childs']?.length) {
//								return link;
//							}
//						});
//					}
//				});
//			}
//		},
	},
});

export default slice.reducer;
