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



  constructor(private friendServ: FriendsService) { this.isFriend = false; }



  ngOnInit() {


    const userId = this.user.uid;


    const currentUserId = firebase.auth().currentUser.uid;

    // const test = this.friendServ.areFriends('KDd0VmgQNcMZeC8HI8th0AR7xx12', 'r6mWeas5MMRwlEvu7RBpdwHqm633');
    // console.log(test);

    // checks if the currently logged in user is following this.user
    this.friendsOfMe = this.friendServ.areFriends(userId);
  }


  toggleFriend() {

    // current friend id and name
    const userId = this.user.uid;
    const name = this.user.name;
    // this.isFriend = this.friendServ.areFriends(userId);
    // if you are already friends, remove, else add
    // TO DO: FIX isFriend method
    if (this.isFriend) {
      this.friendServ.removeFriend(userId, name);
      // this.isFriend = false;
    } else {
      this.friendServ.addFriend(userId, name);
      // this.isFriend = true;
    }
    console.log('toggle friend ' + this.isFriend);
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
