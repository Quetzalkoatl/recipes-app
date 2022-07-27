import {configureStore} from '@reduxjs/toolkit';

import {categoriesReducer} from './CategoriesSlice';
import {categoryRecipesReducer} from './CategoryRecipes';

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		categoryRecipes: categoryRecipesReducer,
	},
});
