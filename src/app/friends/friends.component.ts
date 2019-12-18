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
import { FriendsListComponent } from '../friends-list/friends-list.component';
import { UserFriendListComponent } from '../user-friend-list/user-friend-list.component';

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

    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.filter(a => {
        const user = a.payload.doc.data() as User;
        return user.uid !== this.id;
      }).map(a => {
          const data = a.payload.doc.data() as User;
          const id = a.payload.doc.id;
          return { id, ...data };
      }))
    );

  }

  ngOnInit() {
  }

}
