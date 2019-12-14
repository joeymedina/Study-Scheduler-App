import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
@Component({
  selector: 'app-user-friend-list',
  templateUrl: './user-friend-list.component.html',
  styleUrls: ['./user-friend-list.component.css']
})


export class UserFriendListComponent implements OnInit {
id: any;
  friends: any;
friendsDocument: AngularFirestoreDocument<any>;
  constructor(public auth: AuthService, public afs: AngularFirestore) { 
    this.id = firebase.auth().currentUser.uid;
    this.friendsDocument = this.afs.doc(`friends/` + this.id);
    console.log('user friend list' + this.friendsDocument);
    
    const getDoc = this.friendsDocument.get()
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

  }

  ngOnInit() {
  }

}
