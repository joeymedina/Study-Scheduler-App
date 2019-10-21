import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

isCollapsed = true;

  constructor(public auth: AuthService) { }

  ngOnInit() {
  }
  collapse() {

    this.isCollapsed = !this.isCollapsed;
  }


}
