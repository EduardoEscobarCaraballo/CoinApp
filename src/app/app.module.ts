import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule} from '@angular/fire'
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { FirebaseService } from './service/firebase.service';
import {AngularFireDatabaseModule} from 'angularfire2/database'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireDatabaseModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyBRHXqPw17Rr6bs5K4JBw1W23zonv02cTI",
      authDomain: "coinapp-75272.firebaseapp.com",
      projectId: "coinapp-75272",
      storageBucket: "coinapp-75272.appspot.com",
      messagingSenderId: "910740039456",
      appId: "1:910740039456:web:e856f0976f141795bf5945",
      measurementId: "G-L5LSWXKYDX"
    }),
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
