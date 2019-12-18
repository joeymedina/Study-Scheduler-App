import { Component, OnInit } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from '@angular/fire/firestore';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase';
import { Friend, friendsList, FriendsService } from '../friends.service';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-user-friend-list',
    templateUrl: './user-friend-list.component.html',
    styleUrls: ['./user-friend-list.component.css']
})
export class UserFriendListComponent implements OnInit {
    id: string;
    friends$: Observable<friendsList>;
    friends: Friend[];
    friendsDocument: AngularFirestoreDocument<any>;
    constructor(public auth: AuthService, public afs: AngularFirestore, public friendService: FriendsService) {
        this.id = firebase.auth().currentUser.uid;
        this.friends$ = this.afs.doc<friendsList>(`friends/${this.id}`).valueChanges();
        this.friends$.subscribe(friends => {
            // console.log(friends.friendsList);
            this.friends = friends.friendsList;
        })
        // .subscribe(friends => {
        //     this.friends = friends;
        // });
    }

    ngOnInit() {
    }

    removeFriend(friend: Friend) {
        this.friendService.removeFriend(friend.id, friend.name, friend.photoURL);
    }

}
