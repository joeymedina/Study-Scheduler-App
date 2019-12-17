import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
export interface User {
  uid: string;
  name: string;
  email: string;
  photoURL: string;
  school?: string;
}

export interface UserId extends User { id: string; }
export interface Friend {
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class FriendsService {
  events: Observable<any>;
  users: Observable<UserId[]>;
  public usersCollection: AngularFirestoreCollection<User>;
  friend: string;
  notAdded: boolean;
  remove: boolean;
  friendsDocument: AngularFirestoreDocument<any>;
  id: string;
  name: string;
  yourFriendsDocument: AngularFirestoreDocument<any>;
  friends$: AngularFireList<Friend> = null;
  userId: string;
  test: any;
  friend1: Friend = {
    displayName: 'Joey'
  };
  friendId: any;
  friendFlag: boolean;
  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, public afs: AngularFirestore) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userId = user.uid;
    //   }
    // });
    this.friendFlag = false;
    this.id = firebase.auth().currentUser.uid;
    this.name = firebase.auth().currentUser.displayName;
    this.notAdded = true;
    this.usersCollection = this.afs.collection('users/');
    this.friendsDocument = this.afs.doc(`friends/` + this.id);
    // this.user = this.usersCollection.snapshotChanges().map(actions => {
    //   return actions.map(a => {
    //     const data = a.payload.doc.data() as User;
    //     const id = a.payload.doc.id;
    //     return { id, ...data };
    //   });;


    this.users = this.usersCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as User;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );




  }
  getTotalFriends(userId: string) {
    // Used to build the follower count
    return this.db.object(`friends/${userId}`);
  }

  areFriends(followerId: string) {
    // Used to see if UserFoo if following UserBar

    this.friendsDocument = this.afs.doc(`friends/` + this.id);
    console.log('user friend list' + this.friendsDocument);

    const getDoc = this.friendsDocument.get()
      .toPromise().then(doc => {
        if (!doc.exists) {
          console.log('No such document!');
        } else {
          this.test = doc.data();
          console.log('Document datad:', this.test.friendsList);

          for (let friend of this.test.friendsList) {
            if (followerId.localeCompare(friend.id)) {
              this.friendFlag = true;
            } else {
              this.friendFlag = false;
              console.log('who: ' + friend.id + ' flag: ' + this.friendFlag + ' with: ' + followerId);
              return this.friendFlag;
            }
            console.log('friend: ' + friend.id + ' flag: ' + this.friendFlag + ' compare: ' + followerId);
          }

        }
      })
      .catch(err => {
        console.log('Error getting document', err);
      });

    console.log('final flag: ' + this.friendFlag);

    return this.friendFlag;
  }


  addFriend(friendToAdd, dispName) {
    console.log(this.id + 'huh');
    // this.afs.doc(`friends/KDd0VmgQNcMZeC8HI8th0AR7xx12/`).update({['x15LHCKzENdDqnyR5aTobgpOBAl2']: true, name: 'tanner'});
    this.notAdded = false;
    this.remove = true;
    this.friendsDocument.update(
      { friendsList: firebase.firestore.FieldValue.arrayUnion({ id: friendToAdd, name: dispName }) }
    );
    // adds your id to 'friends' friend list
    this.yourFriendsDocument = this.afs.doc(`friends/` + friendToAdd);
    this.yourFriendsDocument.update(
      { friendsList: firebase.firestore.FieldValue.arrayUnion({ id: this.id, name: this.name }) }
    );

    console.log(friendToAdd);

  }

  removeFriend(friendToRemove, dispName) {
    this.notAdded = true;
    this.remove = false;

    this.friendsDocument.update(
      { friendsList: firebase.firestore.FieldValue.arrayRemove({ id: friendToRemove, name: dispName }) }
    );

    // removes you from their friendslist
    this.yourFriendsDocument = this.afs.doc(`friends/` + friendToRemove);
    this.yourFriendsDocument.update(
      { friendsList: firebase.firestore.FieldValue.arrayRemove({ id: this.id, name: this.name }) }
    );
    console.log(friendToRemove + 'removed');
  }

}
