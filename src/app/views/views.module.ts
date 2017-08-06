import {NgModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
import {ViewsRoutingModule} from './views-routing.module';
import {LoginComponent} from './login/login.component';
import {MainViewComponent} from './main-view/main-view.component';
import {MinorViewComponent} from './minor-view/minor-view.component';
import {RegisterComponent} from './register/register.component';
import {BrowserModule} from '@angular/platform-browser';
import {EchartsDirective} from '../directive/echart.directive';
import {NgxPaginationModule} from '../pagination/ngx-pagination.module';

@NgModule({
  declarations: [
    LoginComponent,
    MainViewComponent,
    MinorViewComponent,
    RegisterComponent,
    EchartsDirective
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ViewsRoutingModule,
    NgxPaginationModule
  ]
})
export class ViewsModule {

}
