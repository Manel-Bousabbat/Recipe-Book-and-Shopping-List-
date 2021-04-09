import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Params} from '@angular/router';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {RecipeService} from '../recipe.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
   id !: number;
   editMode = false;
   recipeForm!: FormGroup;
  constructor(private route: ActivatedRoute,
              private recipeService: RecipeService ) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = +params.id;
        this.editMode = params.id != null;
        this.initForm();
      }
    );
  }
  // tslint:disable-next-line:typedef
  onSubmit(){
   if (this.editMode){
     this.recipeService.updateRecipe(this.id, this.recipeForm.value);
   } else{
     this.recipeService.addRecipe(this.recipeForm.value);
   }
  }
  // tslint:disable-next-line:typedef
  onAddIngredient(){
    ( this.recipeForm.get('ingredients') as FormArray).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    );
  }
// tslint:disable-next-line:typedef
private initForm(){
    let recipeName = '';
    let recipeImagePath = '';
    let recipeDescription = '' ;
    const recipeIngredients = new FormArray([]);
    if (this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDescription = recipe.description;
      if (recipe.ingredients){
        for (const ingredient of recipe.ingredients){
          recipeIngredients.push(
            new FormGroup({
              name: new FormControl(ingredient.name, Validators.required),
              amount : new FormControl(ingredient.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      name : new FormControl(recipeName, Validators.required),
      imagePath : new FormControl(recipeImagePath, Validators.required),
      description: new FormControl (recipeDescription, Validators.required),
      ingredients: recipeIngredients
    });
}
  // tslint:disable-next-line:typedef
  get controls() { // a getter!
    return (this.recipeForm.get('ingredients') as FormArray).controls;
  }
}
