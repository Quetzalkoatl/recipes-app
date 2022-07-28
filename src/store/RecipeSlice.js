import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

import {API_URL} from '../config';

export const fetchRecipe = createAsyncThunk(
	'recipe/fetchRecipe',
	async function (id, {rejectWithValue}) {
		try {
			const response = await fetch(API_URL + '/lookup.php?i=' + id);

			if (!response.ok) {
				throw new Error('Cant fetch recipe');
			}

			const data = await response.json();

			return data.meals;
		} catch (error) {
			return rejectWithValue(error.message);
		}
	}
);

const recipeSlice = createSlice({
	name: 'CategoryRecipes',
	initialState: {
		recipe: [],
		status: null,
		error: null,
	},
	extraReducers: {
		[fetchRecipe.pending]: state => {
			state.status = 'loading';
			state.error = null;
		},
		[fetchRecipe.fulfilled]: (state, action) => {
			state.status = 'resolved';
			state.recipe = action.payload;
		},
		[fetchRecipe.rejected]: (state, action) => {
			state.status = 'rejected';
			state.error = action.payload;
		},
	},
});

export const recipeReducer = recipeSlice.reducer;
