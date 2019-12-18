import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import * as firebase from 'firebase';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection, Action, DocumentSnapshot } from '@angular/fire/firestore';
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
    id: string;
    name: string;
    photoURL: string;
}
export interface friendsList {
    friendsList: Friend[]
}

@Injectable({
    providedIn: 'root'
})
export class FriendsService {
    events: Observable<any>;
    users: UserId[];
    public usersCollection: AngularFirestoreCollection<User>;
    notAdded: boolean;
    remove: boolean;
    friendsDocument: AngularFirestoreDocument<any>;
    id: string;
    name: string;
    photoURL: string;
    yourFriendsDocument: AngularFirestoreDocument<any>;
    friends: friendsList;
    userId: string;
    test: any;
    friendId: any;
    constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, public afs: AngularFirestore) {
        // this.afAuth.authState.subscribe(user => {
        //   if (user) {
        //     this.userId = user.uid;
        //   }
        // });
        this.id = firebase.auth().currentUser.uid;
        this.name = firebase.auth().currentUser.displayName;
        this.photoURL = firebase.auth().currentUser.photoURL;
        this.notAdded = true;
        this.usersCollection = this.afs.collection('users/');
        this.friendsDocument = this.afs.doc<friendsList>(`friends/` + this.id);
        // this.user = this.usersCollection.snapshotChanges().map(actions => {
        //   return actions.map(a => {
        //     const data = a.payload.doc.data() as User;
        //     const id = a.payload.doc.id;
        //     return { id, ...data };
        //   });;


        this.usersCollection.snapshotChanges()
            .subscribe(actions => {
                this.users = actions.map(a => {
                    const data = a.payload.doc.data() as User;
                    const id = a.payload.doc.id;
                    return { id, ...data };
                });
                
                this.friendsDocument.valueChanges().subscribe(friends => {
                    // console.log("friends: ", friends)
                    this.friends = friends;
                })
            }
        );
    }

    getTotalFriends(userId: string) {
        // Used to build the follower count
        return this.friends.friendsList.length;
    }

    areFriends(followerId: string): boolean {
        if (this.friends) {
            console.log("friends", this.friends)
            for (const friend of this.friends.friendsList) {
                if (friend.id === followerId) {
                    return true;
                }
            }
            return false;
        }
        return false;
    }

    addFriend(friendToAdd, dispName, photoURL) {
        console.log(this.id + 'huh');
        // this.afs.doc(`friends/KDd0VmgQNcMZeC8HI8th0AR7xx12/`).update({['x15LHCKzENdDqnyR5aTobgpOBAl2']: true, name: 'tanner'});
        this.notAdded = false;
        this.remove = true;
        this.friendsDocument.update(
            { friendsList: firebase.firestore.FieldValue.arrayUnion({ id: friendToAdd, name: dispName, photoURL: photoURL }) }
        );
        // adds your id to 'friends' friend list
        this.yourFriendsDocument = this.afs.doc(`friends/` + friendToAdd);
        this.yourFriendsDocument.update(
            { friendsList: firebase.firestore.FieldValue.arrayUnion({ id: this.id, name: this.name, photoURL: this.photoURL }) }
        );

        console.log(friendToAdd);

    }

    removeFriend(friendId, dispName, photoURL) {
        this.notAdded = true;
        this.remove = false;

        this.friendsDocument.update(
            { friendsList: firebase.firestore.FieldValue.arrayRemove({ id: friendId, name: dispName, photoURL: photoURL }) }
        );

        // removes you from their friendslist
        this.yourFriendsDocument = this.afs.doc(`friends/` + friendId);
        this.yourFriendsDocument.update(
            { friendsList: firebase.firestore.FieldValue.arrayRemove({ id: this.id, name: this.name, photoURL: this.photoURL }) }
        );
        console.log(friendId + 'removed');
    }

}
