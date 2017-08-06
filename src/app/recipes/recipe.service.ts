import {Recipe} from './recipe.model';
import {EventEmitter, Injectable, OnInit} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';
import {Subject} from 'rxjs/Subject';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';

@Injectable()
export class RecipeService {


  recipesChanged: BehaviorSubject<Recipe[]>;


  private recipes: Recipe[] = [
    new Recipe('Recipe 1', 'Recipe 1 Desc',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg',
     [
       new Ingredient('Meat', 1),
       new Ingredient('French Fries', 100)
     ]),
    new Recipe('Recipe 2', 'Recipe 2 Desc',
      'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-superJumbo.jpg',
    [
      new Ingredient('Bread', 2),
      new Ingredient('Lettuce', 1)
    ]),
    new Recipe('Recipe 3', 'Recipe 3 Desc',
      'http://media2.sailusfood.com/wp-content/uploads/2016/02/cheese-corn-balls-recipe.jpg',
    [
      new Ingredient('Onion', 12),
      new Ingredient('Garlic', 10)
    ]),
    new Recipe('Recipe 4', 'Recipe 4 Desc',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE7IRymancwv_AHfEtZtTaO4POynY8-WQb8zfZ1cp5wk048nPb',
    [
      new Ingredient('Onion', 12),
      new Ingredient('Courgettes', 10)
    ]),
    new Recipe('Recipe 5', 'Recipe 5 Desc',
      'https://metrouk2.files.wordpress.com/2015/06/honey-beer-glazed-chicken-skewers-healthy-chicken-recipes-e1434103670541.jpg',
    [
      new Ingredient('Strawberries', 15),
      new Ingredient('Apples', 4),
      new Ingredient('Grapes', 30)
    ])
  ];

  constructor(private shoppingList: ShoppingListService) {
    this.recipesChanged = new BehaviorSubject(this.recipes);
  }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.getRecipes());
  }
  getRecipes() {
    return this.recipes.slice();
  }

  getRecipeById(id: number): Recipe {
    return this.recipes[id];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingList.addIngredients(...ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.getRecipes());
  }

  updateRecipe(index: number, recipe: Recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.getRecipes());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.getRecipes());
  }

}
