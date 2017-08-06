import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {BasicComponent} from './components/common/layouts/basic.component';


const appRoutes: Routes = [
  {path: '', component: BasicComponent},
  // {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
