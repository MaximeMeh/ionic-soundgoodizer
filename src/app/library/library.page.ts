import { Component, OnInit } from '@angular/core';

import { Library } from './library.model';
import { LibraryService } from './library.service';
import { LoginService } from '../login/login.service';
import { User } from '../login/User';
// import { LoginPage } from '../login/login.page';

@Component({
  selector: 'app-library',
  templateUrl: './library.page.html',
  styleUrls: ['./library.page.scss'],
})
export class LibraryPage implements OnInit {
  librarys: Library[];
  isUserLogged = false;
  user: User;
  // user: boolean =  false;

  constructor(private libraryService: LibraryService, private loginService: LoginService) { }

  ngOnInit() {
    this.librarys = this.libraryService.getAllLibrary();
    this.loginService.$isLoggedIn
      .subscribe( (data) => {
        console.log("I got the data in library", data);
          this.isUserLogged = true;
          this.user = data;
      })
    // this.user = this.loginPage.connected;
  }

  // getUser() {
  //   this.user = LoginPage.login() ;
  // }

}
