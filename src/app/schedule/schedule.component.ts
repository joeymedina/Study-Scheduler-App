import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Schedule } from '@syncfusion/ej2-schedule';
import { Scheduler } from 'rxjs';
@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
isCollapsed = true;



constructor(public auth: AuthService) { }

  ngOnInit() {
  }

collapse() {

  this.isCollapsed = !this.isCollapsed;
}


}


