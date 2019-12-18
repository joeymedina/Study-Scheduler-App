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
import { ScheduleModule, RecurrenceEditorModule } from '@syncfusion/ej2-angular-schedule';
import { LoginComponent } from './login/login.component';
import { MeetingsComponent } from './meetings/meetings.component';
import { FriendsComponent } from './friends/friends.component';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FriendsListComponent } from './friends-list/friends-list.component';
import {
  MatInputModule,
  MatFormFieldModule,
  MatNativeDateModule
} from '@angular/material';
import { MeetingsService } from './meetings.service';
import { UserFriendListComponent } from './user-friend-list/user-friend-list.component';
import { UserMeetingListComponent } from './user-meeting-list/user-meeting-list.component';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { OrderModule } from 'ngx-order-pipe';
import { CommonModule } from '@angular/common';
import { FlatpickrModule } from 'angularx-flatpickr';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';

import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    UserProfileComponent,
    ScheduleComponent,
    NavbarComponent,
    LoginComponent,
    MeetingsComponent,
    FriendsComponent,
    FriendsListComponent,
    UserFriendListComponent,
    UserMeetingListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ScheduleModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
    AccordionModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    }),
    OrderModule,
    OwlDateTimeModule,
    OwlNativeDateTimeModule
  ],
  exports: [
    MatInputModule,
    RecurrenceEditorModule,
    CommonModule,
    NgbModalModule,
    BrowserAnimationsModule,
    MatDatepickerModule
  ],
  providers: [AngularFireDatabase, MeetingsService, MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
