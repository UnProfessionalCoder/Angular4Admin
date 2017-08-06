import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {RecipeService} from '../recipes/recipe.service';
import {Recipe} from '../recipes/recipe.model';
import 'rxjs/Rx';
import {AuthService} from '../auth/auth.service';
import {Subscription} from 'rxjs/Subscription';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataStorageService {

  constructor(private http: Http,
              private recipeService: RecipeService,
              private auth: AuthService) {
  }

  storeRecipes(): Promise<Observable<any>> {
    return ;
    // return this.auth.doAuthenticated(
    //   (token: string) => {
    //     return this.http.put(
    //       'https://ng-recipe-book-cd46e.firebaseio.com/recipes.json?auth=' + token,
    //       this.recipeService.getRecipes()
    //     );
    //   }
    // );

  }

  getRecipes() {
    return;

    // return this.auth.doAuthenticated(
      // (token: string) => {
      //   return this.http.get(
      //     'https://ng-recipe-book-cd46e.firebaseio.com/recipes.json?auth=' + token)
      //     .map((response: Response) => {
      //       const recipes: Recipe[] = response.json();
      //       for (const recipe of recipes) {
      //         if (!recipe['ingredients']) {
      //           recipe['ingredients'] = [];
      //         }
      //       }
      //       return recipes;
      //     })
      //     .subscribe(
      //       (recipes: Recipe[]) => {
      //         this.recipeService.setRecipes(recipes);
      //
      //       }
      //     );
      // }
    // );
  }
}
