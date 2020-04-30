import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import firebaseConfig from './firebase'
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Media } from '@ionic-native/media/ngx';

export const firebaseConfig = {
    apiKey: 'AIzaSyB5COIyYpOyiDC53p4AdgTqvR5a6GzPRVM',
    authDomain: 'ionic-soundgoodizer-app.firebaseapp.com',
    databaseURL: 'https://ionic-soundgoodizer-app.firebaseio.com',
    projectId: 'ionic-soundgoodizer-app',
    storageBucket: 'ionic-soundgoodizer-app.appspot.com',
    messagingSenderId: '341983161021',
    appId: '1:341983161021:web:36b04b88f5e8c4496165d4',
    measurementId: 'G-2NL6L8DXXP'
};

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Media,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
