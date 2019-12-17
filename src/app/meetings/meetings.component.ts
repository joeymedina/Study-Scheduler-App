import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { MeetingsService } from '../meetings.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { UserMeetingListComponent } from '../user-meeting-list/user-meeting-list.component';
declare var $: any;
export interface Meeting {
  meetingName: string;
  notes: string;
  friend: string;
  time: string;
}

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css'],
  providers: [UserMeetingListComponent]
})
export class MeetingsComponent implements OnInit {
  
  meetingForm: FormGroup;
  id: string;
  flag: boolean;
  meetingCollection: AngularFirestoreCollection<Meeting>;
  meetings: any;
  friends: any;
  friendsDocument: AngularFirestoreDocument<any>;
  constructor(public auth: AuthService, public afs: AngularFirestore, public mting: MeetingsService) {

    // initialize form group
    this.meetingForm = new FormGroup({
      meetingName: new FormControl(''),
      notes: new FormControl(''),
      location: new FormControl(''),
      friends: new FormControl(''),
      date: new FormControl('')
    });


    this.id = firebase.auth().currentUser.uid;
    this.flag = false;
    this.meetingCollection = afs.collection<Meeting>('meetings');
    this.friendsDocument = this.afs.doc(`friends/` + this.id);
    console.log('user friend list' + this.friendsDocument);

    // Binding FriendsList to selector
    const getDoc2 = this.friendsDocument.get()
    .toPromise().then(doc => {
      if (!doc.exists) {
        console.log('No such document!');
      } else {
        this.friends = doc.data();
        console.log('Document data:', this.friends);

      }
    })
    .catch(err => {
      console.log('Error getting document', err);
    });

    const friendsRef = this.afs.collection(`friends/`).doc(this.id);
    this.friends = friendsRef.valueChanges()
      .subscribe(d => {
        this.friends = d;
      });



    // // show list of meetings
    // const meetingRef = afs.collection(`meetings/`).doc(this.id);
    // const getDoc = meetingRef.get()
    //   .toPromise().then(doc => {
    //     if (!doc.exists) {
    //       console.log('No such document!');
    //     } else {
    //       this.meetings = doc.data();
    //       console.log('Document data:', this.meetings);

    //     }
    //   })
    //   .catch(err => {
    //     console.log('Error getting document', err);
    //   });

  }


  ngOnInit() {
  }

  // New meeting opens form
  newMeeting() {
    this.flag = true;
    console.log(this.flag);
  }

  // add meeting
  onSubmit() {
    // creates meeting object from form
    const meetingMeet = {
      meetingName: this.meetingForm.get('meetingName').value,
      notes: this.meetingForm.get('notes').value,
      location: this.meetingForm.get('location').value,
      friends: this.meetingForm.get('friends').value,
      date: this.meetingForm.get('date').value
    };

    console.warn(this.meetingForm);
    // adds meetings to database
    this.afs.doc('meetings/' + this.id).update(
      { meetings: firebase.firestore.FieldValue.arrayUnion(meetingMeet) }
    );

    // updates meetings list
    // const meetingRef = this.afs.collection(`meetings/`).doc(this.id);
    // this.meetings = meetingRef.valueChanges()
    //   .subscribe(d => {
    //     this.meetings = d;
    //   });

    this.flag = false;
    this.meetingForm = new FormGroup({
      meetingName: new FormControl(''),
      notes: new FormControl(''),
      location: new FormControl(''),
      friends: new FormControl(''),
      date: new FormControl('')
    });
  }

}
