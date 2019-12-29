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

    public addedEvents: any = JSON.parse(localStorage.getItem('addedEvent')) || [];

    constructor () {

    }

    getEvents() {

        var events = [];

        if (this.addedEvents.length === []) {
            return events;
        } else {
            events = this.setCalendarEvents(this.addedEvents);
            return events;
        }
    }


    setCalendarEvents(addedEvents) {

        var calEvents = []

        addedEvents.forEach(event => {
            calEvents.push({
                start: startOfDay(new Date(event.scheduled)),
                title: event.company,
                color: colors.yellow,
                capacity: event.capacity,
                data: event

            });
        });

        return calEvents;
    
    }
}