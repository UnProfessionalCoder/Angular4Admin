import {Component} from '@angular/core';
import {DataStorageService} from '../../shared/data-storage.service';
import {Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {AuthService} from '../../auth/auth.service';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',

})
export class HeaderComponent {

  constructor(
    private storage: DataStorageService,
    public auth: AuthService) {}

  onSaveData() {
    this.storage.storeRecipes().then(
      (observable: Observable<Response>) => {
        observable.subscribe(
          (response: Response) => {
            console.log(response);
          }
        );
      }
    );

  }

  onFetchData() {
    this.storage.getRecipes();
  }
  onLogout() {
    this.auth.logout();
  }
}
