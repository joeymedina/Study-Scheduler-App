import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import * as firebase from 'firebase';
import { FormGroup, FormControl } from '@angular/forms';

export interface Meeting {
  meetingName: string;
  notes: string;
  friend: string;
  time: string;
  }

@Injectable({
  providedIn: 'root'
})
export class MeetingsService {
meetingCollection: AngularFirestoreCollection<any>;
meetings: Observable<Meeting>;
collectionPath: string = firebase.auth().currentUser.uid;

constructor(private afs: AngularFirestore, public auth: AuthService) {
  this.meetingCollection = this.afs.collection('meetings/');
  }
form = new FormGroup({
meetingName: new FormControl(''),
notes: new FormControl(''),
friends: new FormControl(''),
time: new FormControl('')
});


  addItem(meeting: Meeting) {
    this.meetingCollection.add(meeting);
}

}



