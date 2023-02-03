import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { exhaustMap, map, take, tap } from 'rxjs';
import { AuthService } from '../auth/auth.service';

import { Recipe } from '../recipes/recipe.model';
import { RecipeService } from './../recipes/recipe.service';


@Injectable({
    providedIn: 'root'
})
export class DataStorageService {
    constructor(private httpClient: HttpClient,
        private recipesService: RecipeService,
        private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipesService.getRecipes();
        this.httpClient
        .put('https://ng-course-recipe-book-d71a7-default-rtdb.europe-west1.firebasedatabase.app/recipes.json', recipes)
            .subscribe(response => console.log(response));
    }

    fetchRecipes() {
      return this.httpClient
        .get<Recipe[]>('https://ng-course-recipe-book-d71a7-default-rtdb.europe-west1.firebasedatabase.app/recipes.json')
        .pipe(
          map(recipes =>
            recipes.map(recipe => {
                return { ...recipe, ingredients: recipe.ingredients ? recipe.ingredients : [] };
            })
          ),
          tap(recipes => this.recipesService.setRecipes(recipes))
        );
    }
}
