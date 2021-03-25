import {Ingredient} from '../shared/ingredient.model';
import { Subject } from 'rxjs';

export class ShoppingListService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10),
  ];
  // tslint:disable-next-line:typedef
  getIngredients(){
   return  this.ingredients.slice();
  }
  // tslint:disable-next-line:typedef
  getIngredient(index: number){
    return this.ingredients[index];
  }
  // tslint:disable-next-line:typedef
  addIngredient(ingredient: Ingredient){
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  // tslint:disable-next-line:typedef
  addIngredients(ingredients: Ingredient[]){
   //  for (let ingredient of ingredients){
    // this.addIngredient(ingredient);
   // }
   this.ingredients.push(...ingredients);
   this.ingredientsChanged.next(this.ingredients.slice());
  }
  // tslint:disable-next-line:typedef
  updateIngredient(index: number, newIngredient: Ingredient){
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
  // tslint:disable-next-line:typedef
  deleteIngredient(index: number){
    this.ingredients.splice(index, 1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
