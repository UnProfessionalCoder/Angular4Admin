import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BasicComponent} from './components/common/layouts/basic.component';


const appRoutes: Routes = [
  {path: '', component: BasicComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
