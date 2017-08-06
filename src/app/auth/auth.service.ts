import {Router} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  token: string = null;

  constructor(private router: Router) {}

  signupUser(email: string, password: string) {
    // firebase.auth().createUserWithEmailAndPassword(email, password).catch(
    //   error => console.log(error)
    // );
  }

  signinUser(email: string, password: string) {
    // firebase.auth().signInWithEmailAndPassword(email, password)
    //   .then(
    //     response => {
    //
    //       this.router.navigate(['/']);
    //       firebase.auth().currentUser.getToken().then(
    //         (token: string) => this.token = token
    //       );
    //     }
    //   )
    //   .catch(
    //     error => console.log(error)
    //   );
  }

  // getToken() {
  //   return ;
  //   // return firebase.auth().currentUser.getToken();
  // }

  doAuthenticated(action: (token: string) => any) {
    // return firebase.auth().currentUser.getToken()
    //   .then(
    //     token => {
    //        this.token = token;
    //        return action(token);
    //     }
    //   );

  }

  isAuthenticated() {
    return this.token != null;
  }

  logout() {
    // firebase.auth().signOut();
    this.token = null;
  }
}
