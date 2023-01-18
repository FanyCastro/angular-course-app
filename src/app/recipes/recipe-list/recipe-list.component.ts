import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  recipes: Recipe[] = [
    new Recipe('A Test Recipe 1', 'This is simply a test 1', 'https://www.seriouseats.com/thmb/px_e8tCpfU7pcNvn4-j3bzQ9kGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaghetti-cacio-e-pepe-recipe-hero-02_1-70880518badb4d428f5d5b03d303fabc.JPG'),
    new Recipe('A Test Recipe 2', 'This is simply a test 2', 'https://www.inspiredtaste.net/wp-content/uploads/2016/07/Pancake-Recipe-1-1200.jpg'),
    new Recipe('A Test Recipe 3', 'This is simply a test 3', 'https://www.bibbyskitchenat36.com/wp-content/uploads/2021/01/DSC_9104-1.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
