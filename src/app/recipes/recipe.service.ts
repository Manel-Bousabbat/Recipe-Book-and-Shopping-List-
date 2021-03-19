
import {EventEmitter} from '@angular/core';
import { Recipe } from './recipe.model';
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe('A test Recipe' , 'this is simply a test' , 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1'),
    new Recipe('Another Recipe' , 'this is another a test' , 'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1')];

  // tslint:disable-next-line:typedef
  getRecipes(){
    // we really can't access the recipes array stored here from outside,
    // we only get a copy,with slice .
    return this.recipes.slice();
  }
}
