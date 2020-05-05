import { Injectable, EventEmitter } from '@angular/core';
import { User } from './User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  $isLoggedIn = new EventEmitter();
  user: User = {
    email: "",
    password: ""
  };

  constructor() { }
  
  login() {
    console.log("Login Service");
    this.user.email = 'test2@test.com';
    this.user.password = 'test1234';

    this.$isLoggedIn.emit(this.user);
  }

}
