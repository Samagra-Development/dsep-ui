import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

export const userSlice = createSlice({
	name: 'user',
	initialState: {
		user:{},
		theme:'dark',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
		},
	reducers: {
        setUser: (state, {payload}) => {
			state.user = payload;
		},
		
		
	},
	
});
export const { setUser  } = userSlice.actions;
export const coursesSelector = (state:any) => state?.userReducer?.user;


