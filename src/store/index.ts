import { configureStore } from '@reduxjs/toolkit';
import { courseSlice } from './slices/coursesSlice';
import { userSlice } from './slices/userSlice';




const reducer = {
    coursesReducer: courseSlice.reducer,
	userReducer:userSlice.reducer
};


const preloadedState = {
	userReducer:{
		//@ts-ignore
		user:localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: ''
	},
    coursesReducer:{  courses:{},
		totalPages:0,
		activePage:1,
		pageSize:10,
		theme:'dark',
		isFetching: false,
		isSuccess: false,
		isError: false,
		errorMessage: ''},
};
const store = configureStore({
    reducer: reducer,
    devTools: true,
	//@ts-ignore
    preloadedState

});

export default store;
