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
import {Main1ViewComponent} from "./main1-view/main1-view.component";
import {Main2ViewComponent} from "./main2-view/main2-view.component";
import {Main3ViewComponent} from "./main3-view/main3-view.component";

@NgModule({
  declarations: [
    LoginComponent,
    MainViewComponent,
    Main1ViewComponent,
    Main2ViewComponent,
    Main3ViewComponent,
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
