import { configureStore } from '@reduxjs/toolkit';
import { courseSlice } from './slices/coursesSlice';




const reducer = {
    coursesReducer: courseSlice.reducer
};


const preloadedState = {
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
    preloadedState

});

export default store;
