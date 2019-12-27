import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Import RxJs required methods
import 'rxjs/Rx';

//Date Functions
import {
    startOfDay, endOfDay, subDays, addDays, endOfMonth,
    isSameDay, isSameMonth, addHours
} from 'date-fns';

//Default colors
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

@Injectable()
export class EventsService {
    constructor () {

    }

    getEvents() {
        return [
            {
                start: subDays(startOfDay(new Date()), 1),
                //end: addDays(new Date(), 1),
                title: 'A 3 day event',
                color: colors.red,
                //actions: this.actions,
                allDay: true,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                //draggable: true
            },
            {
                start: startOfDay(new Date()),
                title: 'An event with no end date',
                color: colors.yellow,
                //actions: this.actions
            },
            {
                start: subDays(endOfMonth(new Date()), 3),
                //end: addDays(endOfMonth(new Date()), 3),
                title: 'A long event that spans 2 months',
                color: colors.blue,
                allDay: true
            },
            {
                start: addHours(startOfDay(new Date()), 2),
                //end: addHours(new Date(), 2),
                title: 'A draggable and resizable event',
                color: colors.yellow,
                //actions: this.actions,
                resizable: {
                    beforeStart: true,
                    afterEnd: true
                },
                //draggable: true
            }
        ];
    }
}