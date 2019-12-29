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

    @ViewChild('viewEventDetail') modalContent: TemplateRef<any>;

    view: CalendarView = CalendarView.Month;

    CalendarView = CalendarView;

    viewDate: Date = new Date();

    modalData: CalendarEvent;

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

        this.events = this.eventsService.getEvents();

        this.events.forEach(event => {
            event.actions = this.actions;
        });
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

    /**
     * Calendar Event handled
     */
    handleEvent(action: string, event: CalendarEvent): void {
        this.modalData = event;
        this.modal.open(this.modalContent, { size: 'lg' });
    }

    setView(view: CalendarView) {
        this.view = view;
    }

    closeOpenMonthViewDay() {
        this.activeDayIsOpen = false;
    }
}