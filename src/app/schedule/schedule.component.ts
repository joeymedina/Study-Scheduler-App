import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
isCollapsed = true;

constructor() { }

  ngOnInit() {
  }

collapse() {

  this.isCollapsed = !this.isCollapsed;
}


}


