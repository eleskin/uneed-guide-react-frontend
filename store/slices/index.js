import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isActiveRegionSelector: false,
	isVisibleRegionSelector: false,
};

const slice = createSlice({
	name: 'index',
	initialState: initialState,
	reducers: {
		setIsActiveRegionSelector(state, {payload}) {
			state.isActiveRegionSelector = payload;
		},
		setIsVisibleRegionSelector(state, {payload}) {
			state.isVisibleRegionSelector = payload;
		},
	},
	extraReducers: {},
});

export const {setIsActiveRegionSelector, setIsVisibleRegionSelector} = slice.actions;
export default slice.reducer;
