import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/thmb/px_e8tCpfU7pcNvn4-j3bzQ9kGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaghetti-cacio-e-pepe-recipe-hero-02_1-70880518badb4d428f5d5b03d303fabc.JPG'),
    new Recipe('A Test Recipe', 'This is simply a test', 'https://www.seriouseats.com/thmb/px_e8tCpfU7pcNvn4-j3bzQ9kGI=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/spaghetti-cacio-e-pepe-recipe-hero-02_1-70880518badb4d428f5d5b03d303fabc.JPG')
  ];

  constructor() { }

  ngOnInit() {
  }
}
