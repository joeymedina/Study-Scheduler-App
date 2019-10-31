import { Component, OnInit, Input } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
 user2: AngularFirestoreDocument<User>;
 user2o: Observable<User>;

 cSchool: string;
 cUid: string ;

id = this.auth.cUid;
isCollapsed = true;


  constructor(public auth: AuthService, public afs: AngularFirestore) {

  }

  ngOnInit() {
      this.user2 = this.afs.doc(`users/` + this.id);
  }


  updateVal() {
    // console.log(this.id + 'huh');
this.user2.update({
 school : this.cSchool });
  }

  collapse() {

    this.isCollapsed = !this.isCollapsed;
  }






}
