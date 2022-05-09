import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isActiveRegionSelector: false,
	isVisibleRegionSelector: false,
	isActiveFilter: false,
	isActiveAuthorizationModal: false,
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
		setIsActiveFilter(state, {payload}) {
			state.isActiveFilter = payload;
		},
		setIsActiveAuthorizationModal(state, {payload}) {
			state.isActiveAuthorizationModal = payload;
		},
	},
	extraReducers: {},
});

export const {
	setIsActiveRegionSelector,
	setIsVisibleRegionSelector,
	setIsActiveFilter,
	setIsActiveAuthorizationModal,
} = slice.actions;
export default slice.reducer;
