import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import axios from 'axios';

export const getAll = createAsyncThunk(
	'navigation/all',
	async () => {
		try {
			const response = await axios.get('https://test-api.uneedguide.com/v1/navigation/all');
			
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
	mainMenuElements: [],
};

const slice = createSlice({
	name: 'navigation',
	initialState: initialState,
	reducers: {},
	extraReducers: {
		[getAll.fulfilled]: (state, {payload}) => {
			if (payload) {
				payload.forEach((menu) => {
					if (menu.name === 'Главное меню') {
						state.mainMenuElements = menu.links.filter((link) => {
							if (link['childs']?.length) {
								return link;
							}
						});
					}
				});
			}
		},
	},
});

export default slice.reducer;
