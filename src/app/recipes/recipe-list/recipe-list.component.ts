import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
recipes: Recipe[] = [
  new Recipe('A test Recipe' , 'this is simply a test' , 'https://www.eatwell101.com/garlic-butter-chicken-bites-asparagus-recipe')
];
  constructor() { }

  ngOnInit(): void {
  }

}
