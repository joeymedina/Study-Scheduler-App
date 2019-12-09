import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
export interface Friend {
  displayName: string;
}

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  friends$: AngularFireList<Friend> = null;
  userId: string;
  friend1: Friend = {
    displayName: 'Joey'
  };

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth) {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.userId = user.uid; }
    });
   }

   getFriends(): AngularFireList<Friend> {

    if (!this.userId) {
      return;
    }
    this.friends$ = this.db.list(`users/${this.userId}/friends`);
    console.log(this.friends$);
    this.addFriend(this.friend1);
    return this.friends$;
   }

   addFriend(friend: Friend) {
     this.friends$.push(friend);
   }
}
