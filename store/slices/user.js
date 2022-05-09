import {createSlice} from '@reduxjs/toolkit';

const initialState = {
	isAuth: false,
};

const slice = createSlice({
	name: 'user',
	initialState: initialState,
	reducers: {
		setIsAuth(state, {payload}) {
			state.isAuth = payload;
		},
	},
	extraReducers: {},
});

export const {
	setIsAuth
} = slice.actions;
export default slice.reducer;
