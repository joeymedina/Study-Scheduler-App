import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-user-meeting-list',
  templateUrl: './user-meeting-list.component.html',
  styleUrls: ['./user-meeting-list.component.css']
})
export class UserMeetingListComponent implements OnInit {
  id: any;
  meetings: any;
  meetingRef: any;
  editForm: boolean;
  meetingForm: FormGroup;
  friends: any;
  constructor(public auth: AuthService, public afs: AngularFirestore) {
    // meeting form group
    this.meetingForm = new FormGroup({
      meetingName: new FormControl(''),
      notes: new FormControl(''),
      location: new FormControl(''),
      friends: new FormControl(''),
      date: new FormControl('')
    });

    this.id = firebase.auth().currentUser.uid;
    const friendsRef = this.afs.collection(`friends/`).doc(this.id);

    // running list of friends for selector
    this.friends = friendsRef.valueChanges()
      .subscribe(d => {
        this.friends = d;
      });

    // reference to users meetings
    this.meetingRef = afs.collection(`meetings/`).doc(this.id);
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
    // running list of meetings
    this.meetingRef = this.afs.collection(`meetings/`).doc(this.id);
    this.meetings = this.meetingRef.valueChanges()
      .subscribe(d => {
        this.meetings = d;
      });

  }

  ngOnInit() {
  }



  test(meeting) {
    console.log('test', meeting.meetingName, meeting.date, meeting.friends);
  }
  // TO DO
  // saveEdit(meetingNameR, notesR, locationR, dateR, friendsR) {
  saveEdit(meeting) {
    console.log('y', meeting.date);
    let mN = this.meetingForm.get('meetingName').value;
    if (mN === '')
    {
      mN = meeting.meetingName;
    }
    let n = this.meetingForm.get('notes').value;
    if (n === '')
    {
      n = meeting.notes;
    }
    let l = this.meetingForm.get('location').value;
    if (l === '')
    {
      l = meeting.location;
    }
    let f = this.meetingForm.get('friends').value;
    if (f === '')
    {
      f = meeting.friends;
    }
    let d = this.meetingForm.get('date').value;
    if (d === '')
    {
      d = meeting.date;
    }

    const meetingMeet = {
      meetingName: mN,
      notes: n,
      location: l,
      friends: f,
      date: d
    };

    this.meetingRef.update(
      {
        meetings: firebase.firestore.FieldValue.arrayRemove(meeting)
      }
    );


    this.meetingRef.update(
      {
        meetings: firebase.firestore.FieldValue.arrayUnion(meetingMeet)
      }
    );
    this.editForm = false;
  }

  edit() {
    this.editForm = !this.editForm;
  }


  // remove meeting
  remove(meetingNameR, notesR, locationR, dateR, friendsR) {
    // removes meeting from your list
    this.meetingRef.update(
      {
        meetings: firebase.firestore.FieldValue.arrayRemove({
          date: dateR, friends: friendsR, location: locationR,
          meetingName: meetingNameR, notes: notesR
        })
      }
    );

  }
}
