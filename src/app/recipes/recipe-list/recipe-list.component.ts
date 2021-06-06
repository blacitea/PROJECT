import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: [],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'A recipe for testing the model',
      'https://images-gmi-pmc.edge-generalmills.com/122984eb-b5ee-48a9-a509-29cf9a26505b.jpg'
    ),
  ];
  constructor() {}

  ngOnInit() {}
}
