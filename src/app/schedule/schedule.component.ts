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
    encapsulation: ViewEncapsulation.None
})
export class ScheduleComponent implements OnInit {
    @ViewChild('modalContent', { static: true }) modalContent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;
    CalendarView = CalendarView;
    viewDate: Date = new Date();
    modalData: {
        action: string;
        event: CalendarEvent;
    };

    actions: CalendarEventAction[] = [
        {
            label: '<i class="fa fa-fw fa-pencil"></i>',
            a11yLabel: 'Edit',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.handleEvent('Edited', event);
            }
        },
        {
            label: '<i class="fa fa-fw fa-times"></i>',
            a11yLabel: 'Delete',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        }
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [
        // {
        //     start: subDays(startOfDay(new Date()), 1),
        //     end: addDays(new Date(), 1),
        //     title: 'A 3 day event',
        //     color: colors.red,
        //     actions: this.actions,
        //     allDay: true,
        //     resizable: {
        //         beforeStart: true,
        //         afterEnd: true
        //     },
        //     draggable: true
        // },
        // {
        //     start: startOfDay(new Date()),
        //     title: 'An event with no end date',
        //     color: colors.yellow,
        //     actions: this.actions
        // },
        // {
        //     start: subDays(endOfMonth(new Date()), 3),
        //     end: addDays(endOfMonth(new Date()), 3),
        //     title: 'A long event that spans 2 months',
        //     color: colors.blue,
        //     allDay: true
        // },
        // {
        //     start: addHours(startOfDay(new Date()), 2),
        //     end: addHours(new Date(), 2),
        //     title: 'A draggable and resizable event',
        //     color: colors.yellow,
        //     actions: this.actions,
        //     resizable: {
        //         beforeStart: true,
        //         afterEnd: true
        //     },
        //     draggable: true
        // }
    ];

    activeDayIsOpen: boolean = false;

    constructor(private modal: NgbModal, public auth: AuthService, public afs: AngularFirestore) { }

    ngOnInit() {
        let userID: string;
        this.auth.user$.subscribe(user => {
            userID = user.uid;
            this.afs.collection<Event>('events', ref => ref.where('uid', '==', userID)).snapshotChanges()
                .subscribe(actions => {
                    this.events = [];
                    actions.map(a => {
                        const e = a.payload.doc.data() as Event;
                        const id = a.payload.doc.id;
                        
                        console.log(e.start.seconds)
                        this.addEvent({
                            start: new Date(e.start.seconds * 1000),
                            end: new Date(e.end.seconds * 1000),
                            title: e.title,
                            color: this.getColor(e.color),
                            actions: this.actions,
                            allDay: e.allDay,
                            resizable: {
                                beforeStart: true,
                                afterEnd: true
                            },
                            draggable: e.draggable,
                            id: id
                        });
                    });
                    this.refresh.next();
                });
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
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    addEvent(event: any): void {
        this.events = [
            ...this.events,
            event
        ];
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

    getDateFrom1970(seconds: number) {
        const nanoseconds = seconds * 1000;

    }
}