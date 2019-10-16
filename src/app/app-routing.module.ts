import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ScheduleComponent} from './schedule/schedule.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [{path: '', component: UserProfileComponent },
                        {path: 'login', redirectTo: '', pathMatch: 'full' },
                        {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
