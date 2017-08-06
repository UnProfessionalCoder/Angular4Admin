import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicComponent} from '../components/common/layouts/basic.component';
import {MainViewComponent} from './main-view/main-view.component';
import {MinorViewComponent} from './minor-view/minor-view.component';
import {BlankComponent} from '../components/common/layouts/blank.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';

const authRoutes: Routes = [
  {
    path: '', component: BasicComponent,
    children: [
      {path: 'mainView', component: MainViewComponent},
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
