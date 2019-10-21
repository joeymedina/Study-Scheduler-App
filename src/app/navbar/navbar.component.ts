import { Component, OnInit } from '@angular/core';
import { AuthService, User } from '../auth.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: User;
navOpen = false;
  constructor(public auth: AuthService) {
    this.auth.user$.subscribe(user => this.user = user);
  }

  ngOnInit() {
  }

  toggleNavbar(){
    this.navOpen = !this.navOpen;
  }
}
