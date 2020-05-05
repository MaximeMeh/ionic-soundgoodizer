import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { auth } from 'firebase/app'
import { LoginService } from './login.service';
import { User } from './User';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {
  user: User = {
    email: 'test2@test.com',
    password: 'test1234',
  };
  connected: boolean;
  
  // @Output('Isconnected') Isconnected = new EventEmitter<string>();
  @Output('change') change = new EventEmitter();

  constructor(public afAuth: AngularFireAuth, private service: LoginService) 
  { 
    this.afAuth.authState.subscribe(auth => {
      if (!auth) {
        console.log('non connecté');
        this.connected = false;
      } else {
        console.log('connecté');
        this.connected = true;
      }
    });
  }

  ngOnInit() {
  }

  // IsConnected(user: User): void  {
  //   this.IsConnected(user);
  // }

  // isLogin() {
  //   this.change.emit({
  //     email: 'test2@test.com',
  //     password: 'test1234',
  //   });
  // }

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
    this.service.login();
    // this.change.emit({
    //   email: 'test2@test.com',
    //   password: 'test1234',
    // });
    // console.log(user);
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
