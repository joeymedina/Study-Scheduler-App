import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UserProfileComponent} from './user-profile/user-profile.component';
import {ScheduleComponent} from './schedule/schedule.component';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';
import { FriendsComponent } from './friends/friends.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [{path: '', component: LoginComponent },
                        {path: 'login', redirectTo: '', pathMatch: 'full' },
                        {path: 'schedule', component: ScheduleComponent, canActivate: [AuthGuard]},
                        {path: 'account', component: UserProfileComponent, canActivate: [AuthGuard]},
                        {path: 'friends', component: FriendsComponent, canActivate: [AuthGuard]},
                      {path: 'meetings', component: MeetingsComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
