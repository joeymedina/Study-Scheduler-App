import { Component, OnInit } from '@angular/core';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
// import * as dataSource from './datasource.json';
import { extend, EmitType } from '@syncfusion/ej2-base';
import { AuthService, User } from '../auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


// Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);







@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css']
})
export class FriendsComponent implements OnInit {

  constructor(public auth: AuthService, public afs: AngularFirestore) { }
  events: Observable<any>;
user: User;

ngOnInit() {
    // this.auth.user$.subscribe(user => {
    //   this.user = user;
    //   this.events = this.afs.collection(`schedule/${user.uid}/events`).valueChanges();
    //   this.events.subscribe(events => {
    //     console.log(events);

    //     // let data = <Object[]>extend([], (dataSource as any).zooEventsData, null, true);
    //     const scheduleObj = new Schedule({
    //       width: '100%',
    //       height: '650px',
    //       selectedDate: new Date(2019, 10, 31),
    //       eventSettings: { dataSource: events },
    //       eventRendered: (args: EventRenderedArgs) => {
    //         const categoryColor: string = args.data.CategoryColor as string;
    //         if (!args.element || !categoryColor) {
    //           return;
    //         }
    //         if (scheduleObj.currentView === 'Agenda') {
    //           (args.element.firstChild as HTMLElement).style.borderLeftColor = categoryColor;
    //         } else {
    //           args.element.style.backgroundColor = categoryColor;
    //         }
    //       },
    //       dataBinding: (e: { [key: string]: any }) => {
    //         const items: { [key: string]: object }[] = (e.result as { [key: string]: object }).items as { [key: string]: object }[];
    //         const scheduleData: object[] = [];
    //         if (items.length > 0) {
    //             // tslint:disable-next-line: prefer-for-of
    //             for (let i = 0; i < items.length; i++) {
    //                 const event: { [key: string]: object } = items[i];
    //                 let when: string = (event.start as { [key: string]: string }).dateTime as string;
    //                 let start: string = (event.start as { [key: string]: string }).dateTime as string;
    //                 let end: string = (event.end as { [key: string]: string }).dateTime as string;
    //                 if (!when) {
    //                     when = (event.start as { [key: string]: string }).date as string;
    //                     start = (event.start as { [key: string]: string }).date as string;
    //                     end = (event.end as { [key: string]: string }).date as string;
    //                 }
    //                 scheduleData.push({
    //                     Id: event.id,
    //                     Subject: event.summary,
    //                     StartTime: new Date(start),
    //                     EndTime: new Date(end),
    //                     IsAllDay: !(event.start as { [key: string]: string }).dateTime
    //                 });
    //             }
    //         }
    //       },
    //     });
    //     scheduleObj.appendTo('#Schedule');
    //    });
    // });
  }





}




