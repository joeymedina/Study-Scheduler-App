import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { of } from 'rxjs';



@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
@ViewChild('collapseExample', {static: false}) el: ElementRef;

user: User;
navOpen = false;
isUserCollapsed = true;

constructor(public auth: AuthService) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  toggleNavbar() {
    this.navOpen = !this.navOpen;
    console.log(this.navOpen);
  }

  collapse() {

    this.isUserCollapsed = !this.isUserCollapsed;
    // document.getElementById('account-info').style.display = this.isUserCollapsed ? '' : 'none';
  }



}

