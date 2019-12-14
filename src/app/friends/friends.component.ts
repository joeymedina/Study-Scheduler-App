import { Component, OnInit, Input } from '@angular/core';
import { Schedule, Day, Week, WorkWeek, Month, Agenda, EventRenderedArgs, Resize, DragAndDrop } from '@syncfusion/ej2-schedule';
// import * as dataSource from './datasource.json';
import { extend, EmitType } from '@syncfusion/ej2-base';
import { AuthService, User } from '../auth.service';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { FriendsService, Friend } from '../friends.service';
import { map } from 'rxjs/operators';
import * as firebase from 'firebase';
Schedule.Inject(Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop);
import {FriendsListComponent} from '../friends-list/friends-list.component';
import { UserFriendListComponent } from '../user-friend-list/user-friend-list.component';

export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  school?: string;
}

export interface Friend{
  friendsList: string[];
}
export interface UserId extends User { id: string; }
@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.css'],
  providers: [FriendsService, FriendsListComponent, UserFriendListComponent]
})
export class FriendsComponent implements OnInit {
  events: Observable<any>;
  users: Observable<UserId[]>;
  public usersCollection: AngularFirestoreCollection<User>;
  friend: string;
  notAdded: boolean;
  remove: boolean;
  friendsDocument: AngularFirestoreDocument<any>;
  id: string;
  yourFriendsDocument: AngularFirestoreDocument<any>;

  friends: any;
  constructor(public auth: AuthService, public f: FriendsService, public afs: AngularFirestore) {

    this.id = firebase.auth().currentUser.uid;
    this.notAdded = true;
    this.usersCollection = this.afs.collection('users/');
    this.friendsDocument = this.afs.doc(`friends/` + this.id);
  
    // this.user = this.usersCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as User;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });;
    // const getDoc = this.friendsDocument.get()
    // .toPromise().then(doc => {
    //   if (!doc.exists) {
    //     console.log('No such document!');
    //   } else {
    //     this.friends = doc.data();
    //     console.log('Document data:', this.friends);

    //   }
    // })
    // .catch(err => {
    //   console.log('Error getting document', err);
    // });


    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );

  }








  
addFriend(friendToAdd) {
  console.log(this.id + 'this is me');
  this.notAdded = false;
  this.remove = true;
  this.friendsDocument.update(
    { friendsList: firebase.firestore.FieldValue.arrayUnion({[friendToAdd] : true})}
  );

  // adds your id to 'friends' friend list
  this.yourFriendsDocument = this.afs.doc(`friends/` + friendToAdd);
  this.yourFriendsDocument.update(
     { friendsList: firebase.firestore.FieldValue.arrayUnion({[this.id] : true})}
   );

  console.log(friendToAdd + 'this is you');

}

removeFriend(friendToRemove) {
  this.notAdded = true;
  this.remove = false;

  this.friendsDocument.update(
    { friendsList: firebase.firestore.FieldValue.arrayRemove({[friendToRemove] : true})}
  );

  // removes you from their friendslist
  this.yourFriendsDocument = this.afs.doc(`friends/` + friendToRemove);
  this.yourFriendsDocument.update(
     { friendsList: firebase.firestore.FieldValue.arrayRemove({[this.id] : true})}
   );
  console.log(friendToRemove + 'meremoved');
}







ngOnInit() {
















  // this.afs.collection('users/').valueChanges()
  // .subscribe(val => console.log(val));


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




