import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleComponent } from './schedule/schedule.component';

const config = {
  apiKey: 'AIzaSyCDBbEVUQ33nE_aUE8oNtIuhTLxob5KWmE',
  authDomain: 'test-studyapp-1.firebaseapp.com',
  databaseURL: 'https://test-studyapp-1.firebaseio.com',
  projectId: 'test-studyapp-1',
  storageBucket: 'test-studyapp-1.appspot.com',
  messagingSenderId: '977554826482',
  appId: '1:977554826482:web:540530aba25fa5da475c6b',
  measurementId: 'G-CPE1ZEEKFY'
};

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ScheduleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
