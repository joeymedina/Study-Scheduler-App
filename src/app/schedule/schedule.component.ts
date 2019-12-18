import {
    Component,
    ChangeDetectionStrategy,
    ViewChild,
    TemplateRef,
    ViewEncapsulation,
    OnInit
} from '@angular/core';
import {
    startOfDay,
    endOfDay,
    subDays,
    addDays,
    endOfMonth,
    isSameDay,
    isSameMonth,
    addHours,
    toDate
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
    CalendarEvent,
    CalendarEventAction,
    CalendarEventTimesChangedEvent,
    CalendarView
} from 'angular-calendar';
import { AuthService } from '../auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { UserFriendListComponent } from '../user-friend-list/user-friend-list.component';
import { UserMeetingListComponent } from '../user-meeting-list/user-meeting-list.component';
import { FriendsService, Friend, friendsList } from '../friends.service';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

const colors: any = {
    red: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
    },
    blue: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
    },
    yellow: {
        primary: '#e3bc08',
        secondary: '#FDF1BA'
    }
};

interface Timestamp {
    seconds: number;
    nanoseconds: number;
}

class Event {
    start: Timestamp;
    end: Timestamp;
    title: string;
    allDay: boolean;
    color: string;
    draggable: boolean;
    uid: string;
}

@Component({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    providers: [UserFriendListComponent, UserMeetingListComponent]
})
export class ScheduleComponent implements OnInit {
    @ViewChild('modalEditEvent', { static: true }) modalEditEvent: TemplateRef<any>;
    @ViewChild('modalAddEvent', { static: true }) modalAddEvent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;
    CalendarView = CalendarView;
    viewDate: Date = new Date();
    modalData: {
        action: string;
        event: CalendarEvent;
    } = null;

    newEventForm: FormGroup;

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            a11yLabel: 'Edit',
            onClick: ({ event }: { event: any }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            a11yLabel: 'Delete',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.afs.doc(`events/${event.id}`).delete();
            }
        }
    ];

    userID: string = '';

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [];

    activeDayIsOpen: boolean = false;

    isEventSubmitted: boolean = false;

    constructor(private modal: NgbModal, public auth: AuthService, public afs: AngularFirestore, private fs: FriendsService, private fb: FormBuilder) { }

    ngOnInit() {
        this.newEventForm = this.fb.group({
            title: this.fb.control(this.modalData ? this.modalData.event.title : ''),
            color: this.fb.group({
                color: this.fb.control(this.modalData ? this.modalData.event.color : 'red', [Validators.required])
            }),
            startDate: this.fb.control(this.modalData ? this.modalData.event.start : '', [Validators.required]),
            endDate: this.fb.control(this.modalData ? this.modalData.event.end : '', [Validators.required]),
            allDay: this.fb.control(this.modalData ? this.modalData.event.allDay : false)
        });

        this.auth.user$.subscribe(user => {
            this.userID = user.uid;
            this.events = [];
            
            this.fs.friendsDocument.valueChanges()
                .subscribe((friendsList: friendsList) => {
                    const friends = friendsList.friendsList;
                    if (!friends.find(friend => friend.id === this.userID)) {
                        const usr: Friend = {
                            id: this.userID,
                            name: user.name,
                            photoURL: user.photoURL
                        }
                        friends.push(usr);
                    }

                    this.events = [];
                    for (let friend of friends) {
                        this.afs.collection<Event>('events', ref => ref.where('uid', '==', friend.id)).snapshotChanges()
                            .subscribe(actions => {
                                let events = actions.map(data => {
                                    let event = data.payload.doc.data() as Event;
                                    let id = data.payload.doc.id;
                                    return {
                                        ...event,
                                        id
                                    }
                                })
                                for (let event of events) {
                                    this.addEvent({
                                        start: new Date(event.start.seconds * 1000),
                                        end: new Date(event.end.seconds * 1000),
                                        title: event.title,
                                        color: this.getColor(event.color),
                                        allDay: event.allDay,
                                        actions: this.actions,
                                        resizable: {
                                            beforeStart: true,
                                            afterEnd: true
                                        },
                                        draggable: true,
                                        uid: friend.id,
                                        id: event.id
                                    });
                                    
                                }
                                this.refresh.next();
                            });
                        
                    }
            })
        });
    }

    getColor(color: string) {
        if (color === "red") {
            return colors.red;
        } else if (color === "blue") {
            return colors.blue;
        } else {
            return colors.yellow;
        }
    }

    dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
        if (isSameMonth(date, this.viewDate)) {
            if (
                (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
                events.length === 0
            ) {
                this.activeDayIsOpen = false;
            } else {
                this.activeDayIsOpen = true;
            }
            this.viewDate = date;
        }
    }

    eventTimesChanged({
        event,
        newStart,
        newEnd
    }: CalendarEventTimesChangedEvent): void {
        this.events = this.events.map(iEvent => {
            if (iEvent === event) {
                this.afs.doc(`events/${iEvent.id}`).update({
                    start: newStart,
                    end: newEnd
                })
                return {
                    ...event,
                    start: newStart,
                    end: newEnd
                };
            }
            return iEvent;
        });
        this.handleEvent('Dropped or resized', event);
    }

    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = { event, action };
        console.log("modalData:", this.modalData)
        this.newEventForm = this.fb.group({
            title: this.fb.control(this.modalData ? this.modalData.event.title : ''),
            color: this.fb.group({
                color: this.fb.control(this.modalData ? this.modalData.event.color : 'red', [Validators.required])
            }),
            startDate: this.fb.control(this.modalData ? this.modalData.event.start : '', [Validators.required]),
            endDate: this.fb.control(this.modalData ? this.modalData.event.end : '', [Validators.required]),
            allDay: this.fb.control(this.modalData ? this.modalData.event.allDay : false)
        });
        this.modal.open(this.modalAddEvent, { size: 'lg' });
    }

    addEvent(event: any): void {
        if (!this.events.find(evnt => evnt.id === event.id)) {
            this.events = [
                ...this.events,
                event
            ];
        }
    }

    addEventToDatabase(event: any): void {
        this.afs.collection('events').add(event);
    }

    updateEventInDatabase(event: any, id: string): void {
        if (id) {
            this.afs.doc(`events/${id}`).update(event);
        } else {
            this.afs.doc(`events/${event.id}`).update(event);
        }
        console.log(this.events);
        this.events = this.events.filter(iEvent => iEvent.id !== id);
        const evt = {
            start: new Date(event.start.seconds * 1000),
            end: new Date(event.end.seconds * 1000),
            title: event.title,
            color: this.getColor(event.color),
            allDay: event.allDay,
            actions: this.actions,
            resizable: {
                beforeStart: true,
                afterEnd: true
            },
            draggable: true,
            uid: this.userID,
            id: event.id
        }
        this.events = [
            ...this.events,
            evt
        ]
    }

    addEvent_Button(): void {
        console.log("Add Event")
        this.modalData = null;
        this.newEventForm = this.fb.group({
            title: this.fb.control(''),
            color: this.fb.group({
                color: this.fb.control('', [Validators.required])
            }),
            startDate: this.fb.control('', [Validators.required]),
            endDate: this.fb.control('', [Validators.required]),
            allDay: this.fb.control(false)
        });
        this.modal.open(this.modalAddEvent, { size: 'lg' });
    }

    deleteEvent(eventToDelete: CalendarEvent) {
        this.events = this.events.filter(event => {
            if (event !== eventToDelete) {
                return true;
            } else {
                this.afs.doc(`events/${event.id}`).delete();
                return false;
            }
        });
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }

    submitNewEvent(id: string) {
        this.isEventSubmitted = true;
        if (this.newEventForm.valid) {
            const newEvent = {
                title: this.newEventForm.get('title').value,
                color: this.newEventForm.get('color').value.color,
                start: new Date(this.newEventForm.get('startDate').value),
                end: new Date(this.newEventForm.get('endDate').value),
                allDay: this.newEventForm.get('allDay').value === true ? true : false,
                uid: this.userID
            }
            if (!id) {
                this.addEventToDatabase(newEvent);
            } else {
                console.log(newEvent);
                this.updateEventInDatabase(newEvent, id);
            }
            this.isEventSubmitted = false;
            this.modal.dismissAll();
        } else {
            console.log("Form is Invalid.");
        }
    }

    colorSelected(eventColor, color: string): boolean {
        return this.getColor(color) === eventColor;
    }
}