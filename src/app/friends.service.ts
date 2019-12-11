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
  yourFriendsDocument: AngularFirestoreDocument<any>;
  friends$: AngularFireList<Friend> = null;
  userId: string;
  friend1: Friend = {
    displayName: 'Joey'
  };

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, public afs: AngularFirestore) {
    // this.afAuth.authState.subscribe(user => {
    //   if (user) {
    //     this.userId = user.uid;
    //   }
    // });

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

  areFriends(followerId: string, followedId: string) {
    // Used to see if UserFoo if following UserBar
    return this.db.object(`friends/${followerId}/friendsList/${followedId}`);
  }
  addFriend(friendToAdd) {
    console.log(this.id + 'huh');
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
  
    console.log(friendToAdd);
  
  }

  removeFriend(friendToRemove) {
    this.notAdded = true;
    this.remove = false;

    this.friendsDocument.update(
      { friendsList: firebase.firestore.FieldValue.arrayRemove({ [friendToRemove]: true, added: false }) }
    );

    // removes you from their friendslist
    this.yourFriendsDocument = this.afs.doc(`friends/` + friendToRemove);
    this.yourFriendsDocument.update(
      { friendsList: firebase.firestore.FieldValue.arrayRemove({ [this.id]: true }) }
    );
    console.log(friendToRemove + 'removed');
  }

}
