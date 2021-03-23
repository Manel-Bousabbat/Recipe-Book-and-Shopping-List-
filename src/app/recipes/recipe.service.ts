
import { Injectable} from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient} from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
    new Recipe(
      'Tasty Schnitzel' ,
      'this is simply a test' ,
      'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1',
    [
      new Ingredient('Meat', 1 ) ,
      new Ingredient('French Fries', 20 )
    ]
  ),
    new Recipe(
      'Another Recipe' ,
  'this is another a test' ,
  'https://i1.wp.com/www.eatthis.com/wp-content/uploads/2019/10/pumpkin-pad-thai-recipe.jpg?resize=640%2C360&ssl=1',

  [
    new Ingredient('Buns', 2),
  new Ingredient('Meat', 1)
]),

];
   constructor(private slService: ShoppingListService) {
   }
  // tslint:disable-next-line:typedef
  getRecipes(){
    // we really can't access the recipes array stored here from outside,
    // we only get a copy,with slice .
    return this.recipes.slice();
  }
  // tslint:disable-next-line:typedef
  addIngredientsToShoppingList(ingredients: Ingredient[] ){
     this.slService.addIngredients(ingredients);
  }
  // tslint:disable-next-line:typedef
  getRecipe(index: number){
     return this.recipes[index];
  }
}
