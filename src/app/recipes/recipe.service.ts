import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.mode';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

import { Recipe } from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe 1',
      'This is simply a test 1',
      'https://www.seriouseats.com/thmb/px_e8tCpfU7pcNvn4-j3bzQ9kGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaghetti-cacio-e-pepe-recipe-hero-02_1-70880518badb4d428f5d5b03d303fabc.JPG',
      [new Ingredient('Meat', 1), new Ingredient('French Fries', 20)]),
    new Recipe(
      'A Test Recipe 2',
      'This is simply a test 2',
      'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg',
      [new Ingredient('Meat', 1), new Ingredient('Buns', 3)]),
    new Recipe('A Test Recipe 3',
      'This is simply a test 3',
      'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg',
      [new Ingredient('Pasta box', 1), new Ingredient('Onion', 2)]),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipeById(id: number): Recipe {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
