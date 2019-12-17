import { Component, OnInit, Input } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user2: AngularFirestoreDocument<User>;
  user2o: Observable<User>;

  cSchool: string;
  cUid: string;
  meetingTotal: any;
  friendTotal: any;
  id = firebase.auth().currentUser.uid;
  isCollapsed = true;
  meetingRef: any;
  meetings: any;
  id2: any;
  friendsDocument: any;
  friends: any;
  today: number = Date.now();
  editSchool: boolean;
  constructor(public auth: AuthService, public afs: AngularFirestore) {
    this.editSchool = false;
    // meeting reference for meeting total
    this.id2 = firebase.auth().currentUser.uid;
    this.meetingRef = this.afs.collection(`meetings/`).doc(this.id2);
    const getDoc = this.meetingRef.get()
      .toPromise().then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.meetings = doc.data();

        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });

    this.meetingRef = this.afs.collection(`meetings/`).doc(this.id2);
    this.meetings = this.meetingRef.valueChanges()
      .subscribe(d => {
        this.meetings = d;
        this.meetingTotal = d.meetings.length;
      });

    this.friendsDocument = this.afs.doc(`friends/` + this.id2);
    // friend reference for friend total
    const getDoc2 = this.friendsDocument.get()
      .toPromise().then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.friends = doc.data();

        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });

    const friendsRef = this.afs.collection(`friends/`).doc(this.id2);
    this.friends = friendsRef.valueChanges()
      .subscribe(d => {
        this.friends = d;
        this.friendTotal = this.friends.friendsList.length;
      });



  }

  ngOnInit() {
    this.user2 = this.afs.doc(`users/` + this.id);
  }

  editSchoolFlag() {
    this.editSchool = true;
  }

  updateVal() {
    // console.log(this.id + 'huh');

    this.user2.update({
      school: this.cSchool
    });
    this.editSchool = false;
  }

  collapse() {

    this.isCollapsed = !this.isCollapsed;
  }






}
