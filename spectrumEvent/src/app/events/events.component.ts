import { Component, OnInit, ChangeDetectionStrategy, ViewChild, TemplateRef } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subject } from 'rxjs';

// Calendar moduels
import {
    startOfDay, endOfDay, subDays, addDays, endOfMonth,
    isSameDay, isSameMonth, addHours
} from 'date-fns';
import {
    CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent,
    CalendarView
} from 'angular-calendar';

import { ToastrService } from 'ngx-toastr';
import { LoaderService } from './../shared/loader/loader.service';

import { EventsService } from './services/events.service';
import { MembersService } from '../members/services/members.service';
import { getEventsInPeriod } from 'calendar-utils';

@Component({
    'selector': 'app-events',
    'templateUrl': './events.component.html',
    'changeDetection': ChangeDetectionStrategy.OnPush,
})

export class EventsComponent implements OnInit {

    @ViewChild('modalContent') modalContent: TemplateRef<any>;

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
        /* {
            label: '<i class="fa fa-fw fa-times"></i>',
            a11yLabel: 'Delete',
            onClick: ({ event }: { event: CalendarEvent }): void => {
                this.events = this.events.filter(iEvent => iEvent !== event);
                this.handleEvent('Deleted', event);
            }
        } */
    ];

    refresh: Subject<any> = new Subject();

    events: CalendarEvent[] = [];

    activeDayIsOpen: boolean = true;

    constructor(private toaster: ToastrService, private eventsService: EventsService,
        private loaderService: LoaderService, private modal: NgbModal,
        private membersService: MembersService) {

    }

    ngOnInit() {

        this.getEvents();
        this.events = this.eventsService.getEvents();

        this.events.forEach( event => {
            event.actions = this.actions;
        });
    }

    getEvents() {
        this.loaderService.display(true);
        this.membersService.getAllEvents().subscribe((resp: any) => {
            console.log(resp);
            this.loaderService.display(false);
        }, (error: any) => {
            this.loaderService.display(false);
            this.toaster.error(error.error.error || 'Error while getting Events');
        })

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

    addEvent(): void {
        /* this.events = [
            ...this.events,
            {
                title: 'New event',
                start: startOfDay(new Date()),
                end: endOfDay(new Date()),
                color: colors.red,
                draggable: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                }
            }
        ]; */
    }

    deleteEvent(eventToDelete: CalendarEvent) {
        this.events = this.events.filter(event => event !== eventToDelete);
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
}