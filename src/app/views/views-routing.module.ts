import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicComponent} from '../components/common/layouts/basic.component';
import {MainViewComponent} from './main-view/main-view.component';
import {MinorViewComponent} from './minor-view/minor-view.component';
import {BlankComponent} from '../components/common/layouts/blank.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {Main1ViewComponent} from "./main1-view/main1-view.component";
import {Main2ViewComponent} from "./main2-view/main2-view.component";
import {Main3ViewComponent} from "./main3-view/main3-view.component";

const authRoutes: Routes = [
  {
    path: '', component: BasicComponent,
    children: [
      {path: 'mainView', component: MainViewComponent},
      {path: 'mainView1', component: Main1ViewComponent},
      {path: 'mainView2', component: Main2ViewComponent},
      {path: 'mainView3', component: Main3ViewComponent},
      {path: 'minorView', component: MinorViewComponent}
    ]
  },
  {
    path: '', component: BlankComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent }
    ]
  },

  // Handle all other routes
  {path: '**',    component: MainViewComponent }
];

@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [RouterModule]
})
export class ViewsRoutingModule {

}
