import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {API_URL} from '../config';

export const fetchCategoryRecipes = createAsyncThunk(
	'categoryRecipes/fetchCategoryRecipes',
	async function (title, {rejectWithValue}) {
		try {
			const response = await fetch(API_URL + '/filter.php?c=' + title);

			if (!response.ok) {
				throw new Error('Cant fetch recipes from this category');
			}

			const data = await response.json();

			return data.meals;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const categoryRecipesSlice = createSlice({
	name: 'CategoryRecipes',
	initialState: {
		categoryRecipes: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[fetchCategoryRecipes.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchCategoryRecipes.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.categoryRecipes = action.payload;
		},
		[fetchCategoryRecipes.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const categoryRecipesReducer = categoryRecipesSlice.reducer;
