import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-meeting-list',
  templateUrl: './user-meeting-list.component.html',
  styleUrls: ['./user-meeting-list.component.css']
})
export class UserMeetingListComponent implements OnInit {
  id: any;
  meetings: any;
  meetingRef: any;
  constructor(public auth: AuthService, public afs: AngularFirestore) {
    this.id = firebase.auth().currentUser.uid;
    
    this.meetingRef = afs.collection(`meetings/`).doc(this.id);
    const getDoc = this.meetingRef.get()
      .toPromise().then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.meetings = doc.data();
          // console.log('Document data:', this.meetings.meetings.length);
          // console.log(this.meetings);
        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });

    this.meetingRef = this.afs.collection(`meetings/`).doc(this.id);
    this.meetings = this.meetingRef.valueChanges()
        .subscribe(d => {
          this.meetings = d;
          // console.log(d.length);
        });



  }

  ngOnInit() {
  }

}
