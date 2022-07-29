import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {API_URL} from '../config';

export const fetchCategories = createAsyncThunk(
	'categories/fetchCategories',
	async function (_, {rejectWithValue}) {
		try {
			const response = await fetch(API_URL + '/categories.php');

			if (!response.ok) {
				throw new Error('Cant fetch resipes');
			}

			const data = await response.json();

			return data.categories;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const categoriesSlice = createSlice({
	name: 'categories',
	initialState: {
		categories: [],
		status: null,
		error: null,
	},
	reducers: {},
	extraReducers: {
		[fetchCategories.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchCategories.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.categories = action.payload;
		},
		[fetchCategories.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const categoriesReducer = categoriesSlice.reducer;
