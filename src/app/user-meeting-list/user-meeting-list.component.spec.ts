import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMeetingListComponent } from './user-meeting-list.component';

describe('UserMeetingListComponent', () => {
  let component: UserMeetingListComponent;
  let fixture: ComponentFixture<UserMeetingListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMeetingListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMeetingListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
