import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isActiveRegionSelector: false,
};

const slice = createSlice({
	name: 'index',
	initialState: initialState,
	reducers: {
		setIsActiveRegionSelector(state, {payload}) {
			state.isActiveRegionSelector = payload;
		}
	},
	extraReducers: {},
});

export const {setIsActiveRegionSelector} = slice.actions;
export default slice.reducer;
