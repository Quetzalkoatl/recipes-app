import {configureStore} from '@reduxjs/toolkit';

import {categoriesReducer} from './CategoriesSlice';
import {categoryRecipesReducer} from './CategoryRecipes';
import {recipeReducer} from './RecipeSlice';

export const store = configureStore({
	reducer: {
		categories: categoriesReducer,
		categoryRecipes: categoryRecipesReducer,
		recipe: recipeReducer,
	},
});
