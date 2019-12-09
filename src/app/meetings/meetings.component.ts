import { Component, OnInit } from '@angular/core';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
import { AuthService, User } from '../auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';


Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);
@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {

  constructor(public auth: AuthService, public afs: AngularFirestore) { }



  ngOnInit() {
    // const scheduleData: Object[] = [{
    //   Id: 1,
    //   Subject: 'Explosion of Betelgeuse Star',
    //   StartTime: new Date(2018, 1, 15, 9, 30),
    //   EndTime: new Date(2018, 1, 15, 11, 0)
    // }, {
    //   Id: 2,
    //   Subject: 'Thule Air Crash Report',
    //   StartTime: new Date(2018, 1, 12, 12, 0),
    //   EndTime: new Date(2018, 1, 12, 14, 0)
    // }];
    // const scheduleObj: Schedule = new Schedule({
    //   height: '550px',
    //   width: '60%',
    //   selectedDate: new Date(2018, 1, 15),
    //   eventSettings: { dataSource: scheduleData }
    // });
    // scheduleObj.appendTo('#Schedule');
    // const events = scheduleObj.getEvents();
    // console.log(events);
  }





}
