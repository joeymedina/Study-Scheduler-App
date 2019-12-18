import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { MeetingsService } from '../meetings.service';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { UserMeetingListComponent } from '../user-meeting-list/user-meeting-list.component';
import { MatDatepicker } from '@angular/material';
import { DatePickerComponent } from 'gijgo-angular-wrappers';
import * as types from 'gijgo';
import { Friend, friendsList } from '../friends.service';

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
    providers: [UserMeetingListComponent, MatDatepicker]
})
export class MeetingsComponent implements OnInit {

    meetingForm: FormGroup;
    id: string;
    name: string;
    photoURL: string;
    flag: boolean;
    meetingCollection: AngularFirestoreCollection<Meeting>;
    meetings: any;
    friends: Friend[];
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
        this.name = firebase.auth().currentUser.displayName;
        this.photoURL = firebase.auth().currentUser.photoURL;
        console.log('id' + this.id);
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
                    this.friends = doc.data().friendsList as Friend[];
                    // console.log('Document data:', this.friends);

                }
            })
            .catch(err => {
                console.log('Error getting document', err);
            });

        this.afs.doc<friendsList>(`friends/` + this.id).valueChanges()
            .subscribe(d => {
                this.friends = d.friendsList;
            });
    }


    ngOnInit() {
    }

    // New meeting opens form
    newMeeting() {
        this.flag = true;
        // console.log(this.flag);
    }


    // add meeting
    onSubmit() {
        // creates meeting object from form
        const friendID = this.meetingForm.get('friends').value;
        const friend = this.friends.find(friend => friend.id === friendID);
        const meetingMeet = {
            meetingName: this.meetingForm.get('meetingName').value,
            notes: this.meetingForm.get('notes').value,
            location: this.meetingForm.get('location').value,
            friends: [{ id: friendID, name: friend.name, photoURL: friend.photoURL }],
            date: this.meetingForm.get('date').value
        };

        const meetingMeet2 = {
            meetingName: this.meetingForm.get('meetingName').value,
            notes: this.meetingForm.get('notes').value,
            location: this.meetingForm.get('location').value,
            friends: [{ id: this.id, name: this.name, photoURL: this.photoURL }],
            date: this.meetingForm.get('date').value
        };
        console.warn(this.meetingForm);
        // adds meetings to database
        this.afs.doc('meetings/' + this.id).update(
            { meetings: firebase.firestore.FieldValue.arrayUnion(meetingMeet) }
        );
        
        for (let f of meetingMeet.friends) {
            this.afs.doc('meetings/' + f.id).update(
                { meetings: firebase.firestore.FieldValue.arrayUnion(meetingMeet2) }
            );
        }

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
