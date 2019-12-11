import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { FriendsService, Friend } from '../friends.service';
import { size } from 'lodash';
import * as firebase from 'firebase';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css'],
  providers: [FriendsService]
})
export class FriendsListComponent implements OnInit, OnDestroy {

  @Input() user: any;        // a user who can be followed
  @Input() currentUser: any; // currently logged in user

  friendCount: number;
  isFriend: boolean;

  friends;
  friendsOfMe;



  constructor(private friendServ: FriendsService) { this.isFriend = false;}



  ngOnInit() {

    
    const userId = this.user.uid;
    const currentUserId = firebase.auth().currentUser.uid;
    console.log(userId);
    console.log(currentUserId);
    const test = this.friendServ.areFriends(currentUserId, userId);
    console.log(test);
    // checks if the currently logged in user is following this.user
    this.friendsOfMe = this.friendServ.areFriends(currentUserId, userId).valueChanges()
      .subscribe((friendOfMe: any) => {
        this.isFriend = friendOfMe.value;
      });



  }


  private countFriends(friends) {
    if (friends.$value === null) {
      return 0;
    } else {
      return size(friends);
    }

  }

  toggleFriend() {
    const userId = this.user.uid;
    if (this.isFriend) {
      this.friendServ.removeFriend(userId);
      this.isFriend = false;
    } else {
      this.friendServ.addFriend(userId);
      this.isFriend = true;
    }
    console.log(this.isFriend);
  }


  // tslint:disable-next-line: use-lifecycle-interface
  ngOnDestroy() {
    if (this.friends) {
      this.friends.unsubscribe();
    }
    if (this.friendsOfMe) {
      this.friendsOfMe.unsubscribe();
    }

  }

}
