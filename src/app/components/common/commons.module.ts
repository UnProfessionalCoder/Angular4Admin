import {NgModule} from '@angular/core';


import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FooterComponent} from './footer/footer.component';
import {BasicComponent} from './layouts/basic.component';
import {BlankComponent} from './layouts/blank.component';
import {NavigationComponent} from './navigation/navigation.component';
import {TopnavbarComponent} from './topnavbar/topnavbar.component';
import {ViewsRoutingModule} from '../../views/views-routing.module';

@NgModule({
  declarations: [
    FooterComponent,
    BasicComponent,
    BlankComponent,
    NavigationComponent,
    TopnavbarComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    ViewsRoutingModule
  ]
})
export class CommonsModule {

}
