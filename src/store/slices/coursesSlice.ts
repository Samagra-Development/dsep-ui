import { createSlice } from '@reduxjs/toolkit';
import {cloneDeep} from 'lodash';

export const courseSlice = createSlice({
	name: 'courses',
	initialState: {
		courses:{},
		totalPages:0,
		activePage:1,
		pageSize:10,
		theme:'dark',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: '',
		
	},
	reducers: {
		setIsLoading: (state, {payload}) => {
			state.isFetching = payload;
		},
		setCourses:(state, {payload}) => {
			console.log("vvvv: payload",{payload:cloneDeep(payload)});
			state.isFetching = false;
			//state.courses=payload.catalogue
			state.courses=payload.catalog
            return state;
		}
		
	},
	
});
export const { setIsLoading,setCourses  } = courseSlice.actions;
export const coursesSelector = (state:any) => state?.coursesReducer?.courses;


