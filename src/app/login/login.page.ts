import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'

interface User {
  email?: string;
  password?: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user: User = {
    email: 'test2@test.com',
    password: 'test1234',
  }

  constructor(public afAuth: AngularFireAuth) { }

  ngOnInit() {
  }

  async createAccount() {
    const user = await this.afAuth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );

    console.log(user);
  }

  async login(){
    const user = await this.afAuth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password,
    );

    console.log(user);
  }

  async logout(){
    await this.afAuth.signOut();
  }

  // async login() {
  //   const { username, password } = this
  //   try {
  //       const res = await this.afAuth.auth.signInWithEmailAndPassword(username + '@gmail.com', password)
  //   }catch(err) {
  //     console.dir(err)
  //   }
  // }

}
