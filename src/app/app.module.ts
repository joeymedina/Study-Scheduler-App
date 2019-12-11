import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';
import { LoginComponent } from './login/login.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { FriendsComponent } from './friends/friends.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule } from '@angular/forms';
import { FriendsListComponent } from './friends-list/friends-list.component';


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
    ScheduleComponent,
    NavbarComponent,
    LoginComponent,
    MeetingsComponent,
    FriendsComponent,
    FriendsListComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ScheduleModule,
    FormsModule
  ],
  providers: [AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }
