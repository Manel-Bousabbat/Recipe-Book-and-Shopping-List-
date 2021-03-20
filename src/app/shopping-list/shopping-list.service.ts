import {Ingredient} from '../shared/ingredient.model';

export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  // tslint:disable-next-line:typedef
  getIngredients(){
   return  this.ingredients.slice();
  }
  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
  }
}
